const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbcinema",
});

db.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL");
});

app.get('/filmes', (req, res) => {
  const query = 'SELECT * FROM tbfilme';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/diretor', (req, res) => {
  const query = 'SELECT * FROM tbdiretor';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/diretor', (req, res) => {
  const { nome_diretor } = req.body;
  const query = 'INSERT INTO tbdiretor (nome_diretor) VALUES (?)';
  db.query(query, [nome_diretor], (err, results) => {
    if (err) throw err;
    res.status(201).send('Registro criado com sucesso');
  });
});

app.post("/registre_filme", (req, res) => {
  const {nome_filme, ano_lancamento, categoria_filme,  codigo_diretor} = req.body;
  const query = 'INSERT INTO tbfilme (nome_filme, ano_nascimento, categoria_filme, codigo_diretor) VALUES (?, ?, ?, ?)';
  db.query(query, [nome_filme, ano_lancamento, categoria_filme, codigo_diretor], (err, results) => {
    if (err) throw err;

  res.status(201).send("Registro criado com sucesso");
})});

app.use(bodyParser.json());

app.listen(port, () => {
  console.log("server listening on port 300");
});