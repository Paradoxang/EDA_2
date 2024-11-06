// controllers/user.controller.js
const User = require("../Models/User");

// Controlador para crear un usuario
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).send("Error al crear el usuario");
    }
};

// Controlador para obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).send("Error al obtener los usuarios");
    }
};

module.exports = {
    createUser,
    getUsers,
};
