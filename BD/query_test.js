import knex from './db.js'

let query = () => {

    knex.select().from('tasks')
        .then(rows => {
            console.log(rows)
        })

}

export default query