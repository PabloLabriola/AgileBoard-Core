import createApp from './server/app.js'
import _ from 'underscore'

const app = createApp()

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
    console.log(`Server started on: ${server.address().port}`)
})



// import array from './query_test.js'

// console.log(array)