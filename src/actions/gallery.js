import {postURL} from '../utilities/xmlhttp.js';
import {toGallery} from './nav.js';
export function galleryIsLoading(bool){
    return{
        type:"GALLERY_IS_LOADING",
        isLoading: bool
    }
}
//expects an id_user
export function galleryFetchData(input){
return (dispatch) => {
        dispatch(galleryIsLoading(true));
        postURL("/php/gallery_get_images.php", input)
            .then(
            //success
            function (res) {
                console.log(res);
                var response = JSON.parse(res);
                dispatch(galleryIsLoading(false));
                dispatch(galleryError(null));
                dispatch(galleryDataSuccess(response))
                }
            ,
            //failure
            function (error) {
                dispatch(galleryIsLoading(false));
                dispatch(galleryError("SERVER_ERROR"));
            });
    }
}

export function galleryUpload(input,callback=()=>{}) {
    return (dispatch) => {
        postURL("/php/gallery_upload_image.php", input)
            .then(
            //success
            function (res) {
                dispatch(galleryFetchData(input));
                callback();
            }
            ,
            //failure
            function (error) {
                dispatch(galleryError("SERVER_ERROR"));
                callback();
            });
    }
}

export function galleryDataSuccess(gallery){
    return{
        type: "GALLERY_DATA_SUCCESS",
        gallery
    }
}

export function galleryError(error){
    return{
        type: "GALLERY_ERROR",
        error
    }
}
export function galleryDelete(input)
{
return (dispatch) => {
        postURL("/php/gallery_delete_image.php", input)
            .then(
            //success
            function (res) {
                dispatch(toGallery(input));
            }
            ,
            //failure
            function (error) {
                dispatch(galleryError("SERVER_ERROR"));
            });
    }
}
export function galleryUpdate(input,callback=()=>{})
{
return (dispatch) => {
        postURL("/php/gallery_update_image.php", input)
            .then(
            //success
            function (res) {
                dispatch(galleryFetchData(input));
                callback();
            }
            ,
            //failure
            function (error) {
                dispatch(galleryError("SERVER_ERROR"));
                callback();
            });
    }
}