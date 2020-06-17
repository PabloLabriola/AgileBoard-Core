'user strict';

import mysql from 'mysql'

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'agileboard_db'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('DB Conected!')
});

export default connection