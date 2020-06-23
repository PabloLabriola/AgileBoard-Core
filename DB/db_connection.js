// import knexLib from "knex";
import mysql from 'mysql'

//local mysql db connection
var connection = mysql.createConnection({
    host: "sql10.freemysqlhosting.net",
    user: "sql10350341",
    password: "CarjgbacwW",
    database: "sql10350341",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('DB Conected!')
});

export default connection
