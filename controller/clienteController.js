const Clientes = require("../models/Clientes");

// Codigo para gestionar la subida de imagenes foto de perfil
const multer = require("multer");
const shortid = require("shortid");

const configuracionMulter = {
  storage: (fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "../../uploads/");
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];
      cb(null, `${shortid.generate()}.${extension}`);
    },
  })),
  fileFilter(req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Formato no válido"));
    }
  },
};

// Pasar la configiguración y el campo
const upload = multer(configuracionMulter).single("fotoPerfil");

// Sube un archivo
exports.subirArchivo = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      console.log(`upload.single error: ${error}`);
      res.json({ mensaje: error });
    }
    return next();
  });
};

//Agregar nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
  const clientes = new Clientes(req.body);
  try {
    //subir imagen
    if (req.file.filename) {
      clientes.fotoPerfil = req.file.filename;
    }
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
