const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST || 'mysql_container',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'projetdb'
};

app.get('/', (req, res) => {
  res.json({
    message: 'Backend job08 is running'
  });
});

app.get('/db-test', (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: 'Connexion MySQL impossible',
        error: err.message
      });
    }

    connection.end();

    res.json({
      ok: true,
      message: 'Connexion MySQL réussie'
    });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend job08 listening on port ${PORT}`);
});