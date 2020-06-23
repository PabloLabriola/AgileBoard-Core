import knexLib from 'knex'

function createDB() {
    const knex = knexLib({
        client: 'mysql',
        connection: {
            host: 'sql10.freemysqlhosting.net',
            user: 'sql10350341',
            password: 'CarjgbacwW',
            database: 'sql10350341'
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
