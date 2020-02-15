const INITIAL_STATE = { value: 'Opa' }
//param state não é o estado da aplicação. Apenas representa o campo que está sendo controlado.
export default function(state = INITIAL_STATE, action) {
        switch (action.type) {
            case 'VALUE_CHANGED':
                //Retornando um novo valor, não o estado alterado
                return { value: action.payload }
            default:
                return state
        }
}