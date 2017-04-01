export function loginError(state=null,action){
    switch(action.type){
        case 'LOGIN_ERROR':
            return action.error;
        default:
            return state;
    }
}

export function loginIsValidating(state=false,action){
    switch(action.type){
        case 'LOGIN_IS_VALIDATING':
            return action.isValidating;
        default:
            return state;
    }
}

//export function activeUser(state=null,action){
    export function activeUser(state= {username:"test",email: "test@gmail.com",src: "http://i.imgur.com/NaZAHQM.jpg",signupDate: "2017-03-30 23:22:53"},action){
    switch(action.type){
        case 'LOGIN_FETCH_DATA_SUCCESS':            
            return action.user;
        case 'SIGNUP_FETCH_DATA_SUCCESS':
            return action.user;
        case 'UPDATE_DATA_SUCCESS':
            return action.user;
        case 'LOGOUT_SUCCESS':
            return null;
        default:
            return state;
    }
}