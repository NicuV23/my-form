require("dotenv").config();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "",
  host: "",
  database: "",
  password: process.env.REACT_DATABASE_PASSWORD + "",
  port: 5432,
});

module.exports = pool;
