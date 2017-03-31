import {postURL} from '../utilities/xmlhttp.js';
export function updateIsValidating(bool){
    return{
        type:"UPDATE_IS_VALIDATING",
        isValidating: bool
    }
}
export function updateData(input) {
    return (dispatch) => {
        dispatch(updateIsValidating(true));
        postURL("/php/update.php", input)
            .then(
            //success
            function (response) {
                console.log(response);
                var response = JSON.parse(response);
                dispatch(updateIsValidating(false));
                switch(response){
                    case "PASSWORD_INCORRECT":
                        dispatch(updateError(response))
                        break;
                    default:{
                        
                        dispatch(updateError(null));
                        dispatch(updateDataSuccess(response));
                        dispatch(updateError(response));
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