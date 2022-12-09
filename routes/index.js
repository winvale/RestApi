const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController");

module.exports = function () {
  //   router.get("/", (req, res) => {
  //     res.send("prueba");
  //   });
  //   router.get("/nosotros", (req, res) => {
  //     res.send("nosotros");
  //   });

  //Agreagar nuevos clientes via post
  router.post("/clientes", clienteController.nuevoCliente);
  return router;
};
