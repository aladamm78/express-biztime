// db.js
const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://aladamm78:ali011380@localhost/biztime"
});

client.connect();

module.exports = client;
