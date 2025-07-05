const validUsers = [
  { email: "brahan@fake.com", password: "1234567859" },
  { email: "ana@test.com", password: "pass1234" },
  { email: "carlos@demo.com", password: "demo2024" },
  { email: "luis@correo.com", password: "qwerty789" },
  { email: "sofia@fake.com", password: "abcd1234" },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const userFound = validUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      res.status(200).json({ success: true, message: "Login exitoso" });
    } else {
      res.status(401).json({ success: false, message: "Credenciales inválidas" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
