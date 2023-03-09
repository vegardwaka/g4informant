const { response } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
    user:"",
    password:"",
    host:"",
    port:5432,
});