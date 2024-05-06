import mongoose from 'mongoose'
import express from 'express'
import routes from './routes'

//conexão com o bd
mongoose.connect('mongodb://0.0.0.0:27017/lol')
const database = mongoose.connection

database.once('conectado', () => {
    console.log('Conectado ao banco com sucesso')

})

//quando um evento de erro estourar 

database.on('error', (error) => {
    console.error('Ocorreu um erro: ', error)
})

const app = express()

app.use(express.json())

//app.use(routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
