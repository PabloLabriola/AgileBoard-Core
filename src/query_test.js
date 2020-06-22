import knex from '../DB/db_connection.js'

let query = knex.select().from('tasks').then(rows => {
    // console.log(rows)
    return JSON.stringify(rows)
}).catch((err) => {
    return err
})


// let array = getTasks()
// let array = []
// array.push(getTasks())
export default query