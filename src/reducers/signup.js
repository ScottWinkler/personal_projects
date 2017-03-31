export function signupError(state=null,action){
    switch(action.type){
        case 'SIGNUP_ERROR':
            return action.error;
        default:
            return state;
    }
}

export function signupIsValidating(state=false,action){
    switch(action.type){
        case 'SIGNUP_IS_VALIDATING':
            return action.isValidating;
        default:
            return state;
    }
}

