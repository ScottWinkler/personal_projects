export function profileError(state=null,action){
    switch(action.type){
        case 'PROFILE_ERROR':
            return action.error;
        default:
            return state;
    }
}

export function profileIsValidating(state=false,action){
    switch(action.type){
        case 'PROFILE_IS_VALIDATING':
            return action.isValidating;
        default:
            return state;
    }
}
