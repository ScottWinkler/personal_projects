import {postURL} from '../utilities/xmlhttp.js';
import {push} from 'redux-little-router';
export function signupIsValidating(bool){
    return{
        type:"SIGNUP_IS_VALIDATING",
        isValidating: bool
    }
}
export function signupFetchData(input) {
    return (dispatch) => {
        dispatch(signupIsValidating(true));
        postURL("/php/signup.php", input)
            .then(
            //success
            function (response) {
                console.log(response);
                response = JSON.parse(response);
                dispatch(signupIsValidating(false));
                switch(response){
                    case "ACCOUNT_EXISTS":
                        dispatch(signupError(response));
                        break;
                    case "EMAIL_EXISTS":
                        dispatch(signupError(response));
                        break;
                    default:{
                        dispatch(signupError(null))
                        dispatch(signupFetchDataSuccess(response));
                        dispatch(push('/'));
                }
            }},
            //failure
            function (error) {
                dispatch(signupIsValidating(false));
                dispatch(signupError("DATABASE_ERROR"));
            });
    }
}

export function signupFetchDataSuccess(user){
    return{
        type: "SIGNUP_FETCH_DATA_SUCCESS",
        user
    }
}

export function signupError(error){
    return{
        type: "SIGNUP_ERROR",
        error
    }
}