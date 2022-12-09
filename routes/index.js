const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController");

module.exports = function () {
  //Agreagar nuevos clientes via post
  router.post(
    "/clientes",
    clienteController.subirArchivo,
    clienteController.nuevoCliente
  );

  //obtener clientes
  router.get("/clientes", clienteController.mostrarClientes);

  //obtener cliente por id
  router.get("/clientes/:idCliente", clienteController.mostrarCliente);

  //actualizar cliente por id
  router.put("/clientes/:idCliente", clienteController.actualizarCliente);

  //Eliminar cliente por id
  router.delete("/clientes/:idCliente", clienteController.EliminarCliente);
  return router;
};
