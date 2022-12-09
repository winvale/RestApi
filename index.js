const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapis", {
  useNewUrlParser: true,
});

//crear el servidor
const app = express();

//habiliatar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // para leer valores desde le postman
//Rutas de la app
app.use("/", routes());

//puerto
app.listen(5000);
