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

//Mostrar clientes
exports.mostrarClientes = async (req, res, next) => {
  const clientes = new Clientes(req.body);

  try {
    //Mostrar clientes
    const clientes = await Clientes.find({}); // si es basio traer clientes
    res.json(clientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

//mostrar cliente por id
exports.mostrarCliente = async (req, res, next) => {
  const cliente = await Clientes.findById(req.params.idCliente);
  if (!cliente) {
    res.json({ mensaje: "el cliente no existe" });
    next();
  }
  //Mostrar cliente
  res.json(cliente);
};

//Actualizar cliente id
exports.actualizarCliente = async (req, res, next) => {
  try {
    const cliente = await Clientes.findByIdAndUpdate(
      { _id: req.params.idCliente },
      req.body,
      {
        new: true,
      }
    );
    res.json(cliente);
  } catch (error) {
    console.log(error);
  }
};

//Actualizar cliente id
exports.EliminarCliente = async (req, res, next) => {
  try {
    await Clientes.findOneAndDelete({ _id: req.params.idCliente });
    res.json({ mensaje: "El cliente se ha eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
