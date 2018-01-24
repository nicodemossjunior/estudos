const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    //Descrição da tarefa - String, obrigatória
    description : { type: String, required: true },
    //done: pra dizer se a tarefa está concluída ou não
    done : { type: Boolean, required: true, default: false },
    //Data de criação da tarefa. Útil para ordenações
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)