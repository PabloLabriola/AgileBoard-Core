import express from 'express'

const app = express(),
port = process.env.PORT || 3000;

app.use(express.json())

let estudiantes = []

app.get('/api/', (req,res) => {
    console.log('get')
   
})

app.post('/api/', (req,res) => {
    console.log('post')
    
})

app.put('/api//:id', (req,res) => {
    console.log('put')
    
})

app.delete('/api//:id', (req,res) => {
    console.log('delete')

})

app.listen(port, error => {
    if(error) throw new Error(`Error en servidor ${error}`)
    console.log(`Servidor express escuchando en el puerto ${port}`)
})
