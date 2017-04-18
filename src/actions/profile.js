import {postURL} from '../utilities/xmlhttp.js';
export function profileIsValidating(bool){
    return{
        type:"PROFILE_IS_VALIDATING",
        isValidating: bool
    }
}
export function profileData(input,callback=()=>{}) {
    return (dispatch) => {
        dispatch(profileIsValidating(true));
        postURL("/php/profile.php", input)
            .then(
            //success
            function (res) {
                console.log(res);
                var response = JSON.parse(res);
                dispatch(profileIsValidating(false));
                switch(response){
                    case "PASSWORD_INCORRECT":
                        dispatch(profileError(response))
                        break;
                    case "EMAIL_EXISTS":
                        dispatch(profileError(response))
                        break;
                    default:{
                        dispatch(profileError(null));
                        dispatch(profileDataSuccess(response))
                        callback(); 
                }
                }
            },
            //failure
            function (error) {
                dispatch(profileIsValidating(false));
                dispatch(profileError("SERVER_ERROR"));
            });
    }
}

export function profileDataSuccess(user){
    return{
        type: "PROFILE_DATA_SUCCESS",
        user
    }
}

export function profileError(error){
    return{
        type: "PROFILE_ERROR",
        error
    }
}