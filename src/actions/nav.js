import{galleryFetchData} from './gallery.js';
import {push} from 'redux-little-router';
export function toGallery(input){
return (dispatch) => {
     //
        dispatch(galleryFetchData(input));
        dispatch(push('/gallery'));
    }
}