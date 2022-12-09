const express = require("express");
const router = express.Router();

module.exports = function () {
  //   router.get("/", (req, res) => {
  //     res.send("prueba");
  //   });
  //   router.get("/nosotros", (req, res) => {
  //     res.send("nosotros");
  //   });

  //Agreagar nuevos clientes via post
  router.post("/clientes", clientesController.nuevoCliente);
  return router;
};
