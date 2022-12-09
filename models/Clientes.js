const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientesSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
  },
  apellido: {
    type: String,
    trim: true,
  },
  empresa: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  telefono: {
    type: String,
    trim: true,
  },
  fotoPerfil: {
    type: String,
  },
});

module.exports = mongoose.model("Clientes", clientesSchema);
