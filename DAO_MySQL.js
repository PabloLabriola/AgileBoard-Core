/* 'user strict';

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

export default connection */

// http://knexjs.org/

import knexLib from 'knex'

const knex = knexLib ({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password : '1234',
        database : 'agileboard_db'
    }
});

console.log('db connected')

export default knex

