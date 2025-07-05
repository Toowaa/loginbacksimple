const express = require('express');
const app = express();
const PORT = 5000;

// Middleware para parsear JSON
app.use(express.json());

// Usuarios válidos
const validUsers = [
  { email: "brahan@fake.com", password: "1234567859" },
  { email: "ana@test.com", password: "pass1234" },
  { email: "carlos@demo.com", password: "demo2024" },
  { email: "luis@correo.com", password: "qwerty789" },
  { email: "sofia@fake.com", password: "abcd1234" },
];

// Configurar CORS manualmente
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Ruta de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validar que se proporcionen email y password
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email y password son requeridos'
    });
  }

  // Buscar usuario válido
  const user = validUsers.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({
      success: true,
      message: 'Login exitoso',
      user: { email: user.email }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Credenciales inválidas'
    });
  }
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

// Iniciar servidor en todas las interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`También disponible en todas las interfaces de red`);
});

module.exports = app;