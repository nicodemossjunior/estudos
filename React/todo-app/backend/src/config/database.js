// Faz o mapeamento de objetos em javascript para os documentos que vão para o mongo,
// bem como abertura de conexão com o mongo e envio de comandos (insersão, atualização, exclusão, agregação)
const mongoose = require('mongoose')
// Para retirar mensagem de advertência, a api de Promisses do mongoose vai utilizar a api de Promisses do próprio node
mongoose.Promisse = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')


