require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

/* ====== USERS ====== */
// Créer un utilisateur
app.post('/users', async (req, res) => {
  const { email, name } = req.body;
  const result = await pool.query(
    'INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *',
    [email, name]
  );
  res.json(result.rows[0]);
});

// Récupérer tous les utilisateurs
app.get('/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

// Supprimer un utilisateur
app.delete('/users/:id', async (req, res) => {
  await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
  res.sendStatus(204);
});

/* ====== RFID CARDS ====== */
// Ajouter une carte RFID
app.post('/rfid_cards', async (req, res) => {
  const { card_id, user_id } = req.body;
  const result = await pool.query(
    'INSERT INTO rfid_cards (card_id, user_id) VALUES ($1, $2) RETURNING *',
    [card_id, user_id]
  );
  res.json(result.rows[0]);
});

// Récupérer toutes les cartes RFID
app.get('/rfid_cards', async (req, res) => {
  const result = await pool.query('SELECT * FROM rfid_cards');
  res.json(result.rows);
});

// Désactiver une carte RFID
app.patch('/rfid_cards/:id/deactivate', async (req, res) => {
  await pool.query('UPDATE rfid_cards SET is_active = false WHERE id = $1', [req.params.id]);
  res.sendStatus(200);
});

/* ====== ACCESS CODES ====== */
// Ajouter un code PIN
app.post('/access_codes', async (req, res) => {
  const { code, user_id } = req.body;
  const result = await pool.query(
    'INSERT INTO access_codes (code, user_id) VALUES ($1, $2) RETURNING *',
    [code, user_id]
  );
  res.json(result.rows[0]);
});

// Désactiver un code PIN
app.patch('/access_codes/:id/deactivate', async (req, res) => {
  await pool.query('UPDATE access_codes SET is_active = false WHERE id = $1', [req.params.id]);
  res.sendStatus(200);
});

/* ====== ACCESS LOGS ====== */
// Ajouter un log d'accès
app.post('/access_logs', async (req, res) => {
  const { access_type, identifier, user_id, success } = req.body;
  const result = await pool.query(
    'INSERT INTO access_logs (access_type, identifier, user_id, success) VALUES ($1, $2, $3, $4) RETURNING *',
    [access_type, identifier, user_id, success]
  );
  res.json(result.rows[0]);
});

// Récupérer tous les logs
app.get('/access_logs', async (req, res) => {
  const result = await pool.query('SELECT * FROM access_logs ORDER BY created_at DESC');
  res.json(result.rows);
});

/* ====== USER-RFID ASSOCIATION ====== */
// Associer un utilisateur à une carte RFID
app.post('/user_rfid', async (req, res) => {
  const { user_id, rfid_id } = req.body;
  const result = await pool.query(
    'INSERT INTO user_rfid (user_id, rfid_id) VALUES ($1, $2) RETURNING *',
    [user_id, rfid_id]
  );
  res.json(result.rows[0]);
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
