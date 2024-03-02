const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.ejs', { nombre: 'Usuario' });
});

app.get('/home', (req, res) => {
  res.render('Home.ejs');
})

app.get('/hembras', (req, res) => {
  res.render('Hembras.ejs');
})

app.get('/machos', (req, res) => {
  res.render('Machos.ejs');
})

app.get('/Agregar', (req, res) => {
  res.render('Agregar.ejs');
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});