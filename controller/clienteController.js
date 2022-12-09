const Clientes = require("../models/Clientes");

//Agregar nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
  const clientes = new Clientes(req.body);

  try {
    //almacenar el cliente
    await clientes.save();
    res.json({ mensaje: "se agrego un nuevo cliente" });
  } catch (error) {
    console.log(error);
    next();
  }
};
