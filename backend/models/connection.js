const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect(() => {
  console.log("Conectado ao banco de dados com ID", connection.threadId);
});

module.exports = connection;
