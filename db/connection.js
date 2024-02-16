const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "Pinkpoppies#1",
      database: "company",
    });

module.exports = connection;
