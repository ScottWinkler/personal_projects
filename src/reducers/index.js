import {combineReducers} from 'redux';
import {loginError,loginIsValidating,activeUser} from './login.js';
import {signupError,signupIsValidating} from './signup.js';
import {profileError,profileIsValidating} from './profile.js';
import {blogData} from './blog.js';
import {galleryData,galleryError,galleryIsLoading} from './gallery.js';
const rootReducer=combineReducers({
    login: combineReducers({loginError,loginIsValidating}),
    signup:combineReducers({signupError,signupIsValidating}),
    profile:combineReducers({profileError,profileIsValidating}),
    activeUser,
    blog:blogData,
    gallery: combineReducers({galleryData,galleryError,galleryIsLoading})
})
export default rootReducer;