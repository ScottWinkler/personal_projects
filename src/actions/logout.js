import {push} from 'redux-little-router';
export function logout(){
return (dispatch) => {
         dispatch(push('/'));
         dispatch(logoutSuccess());
}
}
export function logoutSuccess(){
    return{
        type: "LOGOUT_SUCCESS",
        user: null
    }
}