// db.js
const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB conectado con éxito");
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error);
        process.exit(1); // Salir con error si no se conecta
    }
};

module.exports = connectDB;
