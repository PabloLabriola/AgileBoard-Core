import knex from './db.js'

let query = () => {
    
knex.select().from('task')
.then(rows => {
    console.log(rows)
})

}

export default query