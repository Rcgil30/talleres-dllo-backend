const express = require("express");
const app = express();
const port = 3000;
const data = require("./data.json");

app.use(express.json());

app.get("/users/hobby/:hobby", (req, res) => {
  const hobbyBuscado = req.params.hobby.toLowerCase();

  const filtrados = data.filter((usuario) =>
    usuario.hobbies.map((h) => h.toLowerCase()).includes(hobbyBuscado)
  );

  res.json(filtrados);
});

app.get("/users/exists/:codigo", (req, res) => {
  const codigo = req.params.codigo;

  const existe = data.some((usuario) => usuario.codigo === codigo);

  res.json({ existe });
});

app.get("/users/hobby/count/:hobby", (req, res) => {
  const hobbyBuscado = req.params.hobby.toLowerCase();

  const cantidad = data.filter((usuario) =>
    usuario.hobbies.map((h) => h.toLowerCase()).includes(hobbyBuscado)
  ).length;

  res.json({ cantidad });
});

app.get("/users/is-free", (req, res) => {
  const libres = data.filter((usuario) => usuario.hobbies.length < 3);

  res.json(libres);
});

app.post("/users/suggest", (req, res) => {
  const { codigo, hobby } = req.body;

  const usuario = data.find((u) => u.codigo === codigo);

  if (!usuario) {
    return res.status(404).json({ message: "Usuario no encontrado." });
  }

  if (usuario.hobbies.length >= 3) {
    return res.status(400).json({
      message: "El usuario ya tiene 3 hobbies. No se puede agregar más.",
    });
  }

  if (usuario.hobbies.includes(hobby)) {
    return res.status(400).json({ message: "El usuario ya tiene este hobby." });
  }

  usuario.hobbies.push(hobby);

  res.json({
    message: "Hobby agregado exitosamente.",
    usuario,
  });
});

app.post("/users", (req, res) => {
  const { codigo, nombre, apellido, hobbies } = req.body;

  if (!codigo || !nombre || !apellido || !Array.isArray(hobbies)) {
    return res
      .status(400)
      .json({ message: "Datos incompletos o incorrectos." });
  }

  if (hobbies.length < 2) {
    return res
      .status(400)
      .json({ message: "El usuario debe tener al menos 2 hobbies." });
  }

  const yaExiste = data.some((usuario) => usuario.codigo === codigo);
  if (yaExiste) {
    return res
      .status(409)
      .json({ message: "Ya existe un usuario con ese código." });
  }

  const nuevoUsuario = { codigo, nombre, apellido, hobbies };
  data.push(nuevoUsuario);

  res.status(201).json({
    message: "Usuario registrado exitosamente.",
    usuario: nuevoUsuario,
  });
});

function routeNotFound(req, res) {
  res.status(404).json({
    message: "Route not found.",
  });
}

app.use(routeNotFound);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
