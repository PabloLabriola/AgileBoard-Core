import express from 'express'
import _ from 'underscore'
import knex from './DAO_MySQL.js'

function createApp() {

    const app = express(),
    port = process.env.PORT || 3000

app.use(express.json())

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)
}

export default createApp

knex.select().from('tasks').then(rows => {
    console.log(rows)
}).catch((err) => {
    console.log(err)
});





