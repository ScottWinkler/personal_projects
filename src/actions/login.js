import {postURL} from '../utilities/xmlhttp.js';
import {push} from 'redux-little-router';
export function loginIsValidating(bool){
    return{
        type:"LOGIN_IS_VALIDATING",
        isValidating: bool
    }
}
export function loginFetchData(input) {
    return (dispatch) => {
        dispatch(loginIsValidating(true));
        postURL("/php/login.php", input)
            .then(
            //success
            function (response) {
                console.log(response);
                var response = JSON.parse(response);
                dispatch(loginIsValidating(false));
                switch(response){
                    case "NO_EMAIL_EXISTS":
                        dispatch(loginError(response));
                        break;
                    case "PASSWORD_INCORRECT":
                        dispatch(loginError(response));
                        break;
                    default:{
                        dispatch(loginError(null))
                        dispatch(loginFetchDataSuccess(response));
                        dispatch(push('/'));
                }
                }
            },
            //failure
            function (error) {
                dispatch(loginIsValidating(false));
                dispatch(loginError("DATABASE_ERROR"));
            });
    }
}

export function loginFetchDataSuccess(user){
    return{
        type: "LOGIN_FETCH_DATA_SUCCESS",
        user
    }
}

export function loginError(error){
    return{
        type: "LOGIN_ERROR",
        error
    }
}