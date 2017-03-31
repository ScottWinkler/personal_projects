export function updateError(state=null,action){
    switch(action.type){
        case 'UPDATE_ERROR':
            return action.error;
        default:
            return state;
    }
}

export function updateIsValidating(state=false,action){
    switch(action.type){
        case 'UPDATE_IS_VALIDATING':
            return action.isValidating;
        default:
            return state;
    }
}
