const express = require('express')
const server = express()

//Mapeia todos os métodos HTTP, como define o prefixo da URL (ex: /api...)
//Caso retire o mapeamento da URL, todas as requisições passarão pelo middleware
server.use('/api', function(req, res, next) {
  console.log('Inicio...')
  next()
  console.log('Fim...')
})

server.use('/api', function(req, res) {
  console.log('Resposta...')
  res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando...'))
