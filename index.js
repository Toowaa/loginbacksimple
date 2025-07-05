const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const validUsers = [
  { email: "brahan@fake.com", password: "1234567859" },
  { email: "ana@test.com", password: "pass1234" },
  { email: "carlos@demo.com", password: "demo2024" },
  { email: "luis@correo.com", password: "qwerty789" },
  { email: "sofia@fake.com", password: "abcd1234" },
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const userFound = validUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (userFound) {
    res.status(200).json({ success: true, message: "Login exitoso" });
  } else {
    res.status(401).json({ success: false, message: "Credenciales inválidas" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
