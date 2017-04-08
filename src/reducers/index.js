import {combineReducers} from 'redux';
import {loginError,loginIsValidating,activeUser} from './login.js';
import {signupError,signupIsValidating} from './signup.js';
import {updateError,updateIsValidating} from './update.js';
import {blogData} from './blog.js';
const rootReducer=combineReducers({
    login: combineReducers({loginError,loginIsValidating}),
    signup:combineReducers({signupError,signupIsValidating}),
    update:combineReducers({updateError,updateIsValidating}),
    activeUser,
    blog:blogData
})
export default rootReducer;