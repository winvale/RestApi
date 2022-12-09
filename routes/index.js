const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController");

module.exports = function () {
  //Agreagar nuevos clientes via post
  router.post("/clientes", clienteController.nuevoCliente);

  //obtener clientes
  router.get("/clientes", clienteController.mostrarClientes);

  //obtener cliente por id
  router.get("/clientes/:idCliente", clienteController.mostrarCliente);
  return router;
};
