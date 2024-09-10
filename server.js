// server.js
const express = require('express');
const path = require('path');
const app = express();

// Definir a pasta dist como estática
app.use(express.static(path.join(__dirname, 'dist')));

// Capturar todas as rotas e retornar o index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Definir a porta
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});