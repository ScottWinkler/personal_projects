import {postURL} from '../utilities/xmlhttp.js';
export function updateIsValidating(bool){
    return{
        type:"UPDATE_IS_VALIDATING",
        isValidating: bool
    }
}
export function updateData(input,callback=()=>{}) {
    return (dispatch) => {
        dispatch(updateIsValidating(true));
        postURL("/php/update.php", input)
            .then(
            //success
            function (res) {
                console.log(res);
                var response = JSON.parse(res);
                dispatch(updateIsValidating(false));
                switch(response){
                    case "PASSWORD_INCORRECT":
                        dispatch(updateError(response))
                        break;
                    case "EMAIL_EXISTS":
                        dispatch(updateError(response))
                        break;
                    default:{
                        dispatch(updateError(null));
                        dispatch(updateDataSuccess(response))
                        callback(); 
                }
                }
            },
            //failure
            function (error) {
                dispatch(updateIsValidating(false));
                dispatch(updateError("SERVER_ERROR"));
            });
    }
}

export function updateDataSuccess(user){
    return{
        type: "UPDATE_DATA_SUCCESS",
        user
    }
}

export function updateError(error){
    return{
        type: "UPDATE_ERROR",
        error
    }
}