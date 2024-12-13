const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

app.get('/api/get', (req, res) => {
    console.log('GET request received at /api/get');
    res.status(200).json({
        message: "Hello, this is a response from the GET endpoint!",
        timestamp: new Date().toISOString()
    });
});
// Endpoint POST
app.post('/api/create', (req, res) => {
    const { usuario, contrasena } = req.query;

    if (!usuario || !contrasena) {
        return res.status(400).json({
            error: "Missing required query parameters: 'usuario' and 'contrasena'."
        });
    }

    // Imprime los datos en la terminal
    console.log(`Usuario: ${usuario}`);
    console.log(`Contraseña: ${contrasena}`);

    // Responde al cliente
    res.status(200).json({
        message: `Datos recibidos: Usuario - ${usuario}, Contraseña - ${contrasena}`
    });
});

// Servidor escuchando
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});