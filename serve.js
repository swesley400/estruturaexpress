const express = require('express')

const app = express()

//cria rota
app.get('/', (req, res)=>{
    res.send('Bem vindo')
})

//executa a rota na porta
app.listen(5000, ()=>{
    console.log("Servidor Iniciado com sucesso http://localhost:5000/ ")
})
