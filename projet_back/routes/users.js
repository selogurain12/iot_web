const express = require('express');
const router = express.Router();
const { getUserByIdBd, userExists, createUser, getUsersByName, getAllUsers } = require('../services/usersService');
const errorHandler = require("../utils/errorHandler");
const sql = require("../services/db");

// Route pour récupérer tous les utilisateurs
router.get("/", async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        errorHandler(res, error);
    }
});

// Route pour ajouter un utilisateur
router.post("/", async (req, res) => {
    try {
        const { id, email, name, created_at } = req.body;
        if (!id) return res.status(400).json({ error: "id est requis" });
        if (!email) return res.status(400).json({ error: "email est requis" });
        if (!name) return res.status(400).json({ error: "name est requis" });
        if (!created_at) return res.status(400).json({ error: "created_at est requis" });

        const existingUser = await userExists(id);
        if (existingUser) return res.status(409).json({ error: "Cet utilisateur existe déjà" });

        const newUser = await createUser(id, email, name, created_at);
        res.status(201).json(newUser[0]);
    } catch (error) {
        errorHandler(res, error);
    }
});

// Route pour récupérer un utilisateur par ID
router.get("/:id", async (req, res) => {
    try {
        if (!req.params.id) return res.status(400).json({ error: "l'id est requis" });
        const user = await getUserByIdBd(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        errorHandler(res, error);
    }
});

// Route pour récupérer une liste d'utilisateurs par nom
router.get("/name/:name", async (req, res) => {
    try {
        const users = await getUsersByName(req.params.name);
        res.json(users);
    } catch (error) {
        errorHandler(res, error);
    }
});

// Route pour vérifier si un utilisateur existe
router.get("/exists/:id", async (req, res) => {
    try {
        const exists = await userExists(req.params.id);
        res.json({ exists });
    } catch (error) {
        errorHandler(res, error);
    }
});

module.exports = router;