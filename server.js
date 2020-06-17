import express from 'express'
import _ from 'underscore'

const app = express(),
    port = process.env.PORT || 3000;

app.use(express.json())


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

