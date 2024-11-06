// app.js
const express = require("express");
const connectDB = require("./db");
const userRoutes = require("./Routes/userRoutes");
require("dotenv").config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para manejar datos JSON
app.use(express.json());

// Ruta de ejemplo
app.get("/", (req, res) => {
    res.send("¡Bienvenido a la tienda de e-commerce!");
});

// Rutas
app.use("/api", userRoutes);  // Prefijo /api para las rutas de usuario

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

const User = require("./Models/User");

app.post("/api/users", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear el usuario");
    }
});