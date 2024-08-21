const express = require('express')
//const path = require('path')

//const db = require('./database') //Puxando da pasta database
const routes = require('./routes/routes') // puxando da pasta de rotas

const app = express()


// conexão com o banco de dados
//db.connect()


//habilita server para receber dados via post
app.use(express.urlencoded({extended: true}))

//definindo rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listening on port ${port}`))
