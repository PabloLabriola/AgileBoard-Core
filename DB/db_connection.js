import knexLib from 'knex'
import config from '../src/config'

function createDB() {
    const knex = knexLib({
        client: 'mysql',
        connection: {
            host: config.DB_CONNECTION.host,
            user: config.DB_CONNECTION.user,
            password: config.DB_CONNECTION.password,
            database: config.DB_CONNECTION.database
        }
    });

    let query = knex.select().from('tasks').then(rows => {
        console.log('connected');
    }).catch((err) => {
        console.log(err);

    });

    return knex
}

export default {
    createDB
}
