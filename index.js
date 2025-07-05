const allowedOrigins = [
  "http://localhost:3000",
  "https://testciber-phi.vercel.app"
];

export default function handler(req, res) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const validUsers = [
    { email: "brahan@fake.com", password: "1234567859" },
    { email: "ana@test.com", password: "pass1234" },
    { email: "carlos@demo.com", password: "demo2024" },
    { email: "luis@correo.com", password: "qwerty789" },
    { email: "sofia@fake.com", password: "abcd1234" },
  ];

  if (req.method === "POST") {
    const { email, password } = req.body;

    const userFound = validUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      return res.status(200).json({ success: true, message: "Login exitoso" });
    } else {
      return res.status(401).json({ success: false, message: "Credenciales inválidas" });
    }
  } else {
    return res.status(405).json({ message: "Método no permitido" });
  }
}
