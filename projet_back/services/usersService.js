const sql = require("./db");

// Récupère un utilisateur via son ID en base de données
const getUserByIdBd = async (id_bd) => {
    const users = await sql`
        SELECT 
            u.id,
            u.email,
            u.name,
            u.created_at,
        FROM 
            "users" u
        WHERE 
            u.id = ${id_bd}
        GROUP BY 
            u.id, u.email, u.name, u.created_at;
      `;

    if (users.length === 0) {
        return null;
    }
    var user = {
        id: users[0].id,
        email: users[0].email,
        name: users[0].name,
        created_at: users[0].created_at
    };

    return user;
};

// Récupère une liste de User par le name
const getUsersByName = async (name) => {
    const users = await sql`
        SELECT * FROM "users" WHERE name LIKE ${name};
      `;
    return users;
};

// Récupère tous les users
const getAllUsers = async () => {
    const users = await sql`
        SELECT * FROM "users";
      `;
    return users;
};

// Vérifie si un utilisateur existe
const userExists = async (id) => {
    const user = await sql`
        SELECT * FROM "users" WHERE id = ${id};
      `;
    return user.length > 0;
};

// Ajoute un utilisateur
const createUser = async (id, email, name, created_at) => {
    return await sql`
      INSERT INTO "users" (id, email, name, created_at)
      VALUES (${id}, ${email}, ${name}, ${created_at})
      RETURNING *`;
};

module.exports = { getUserByIdBd, userExists, createUser, getUsersByName, getAllUsers };