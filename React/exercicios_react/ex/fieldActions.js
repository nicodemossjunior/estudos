export function changeValue(e) {
    return {
        type: 'VALUE_CHANGED',
        //Pode ser qualquer nome. Por padrão escolhe-se o nome 'payload' 
        payload: e.target.value
    }
}