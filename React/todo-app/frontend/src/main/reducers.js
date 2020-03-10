import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe às 10:00',
            done: false
        }, {
            _id: 3,
            description: 'Consulta médica na terça depois do almoço',
            done: false
        }]
    })
})

// Exportando para poder usar na configuração do index.jsx, onde vai ser configurada a integração do react com o reducer
export default rootReducer