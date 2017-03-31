import {combineReducers} from 'redux';
import {loginError,loginIsValidating,activeUser} from './login.js';
import {signupError,signupIsValidating} from './signup.js';
import {test_activeUser} from './profile.js';
import {updateError,updateIsValidating} from './update.js';
const rootReducer=combineReducers({
    login: combineReducers({loginError,loginIsValidating}),
    signup:combineReducers({signupError,signupIsValidating}),
    update:combineReducers({updateError,updateIsValidating}),
    activeUser,
    test_activeUser
})
export default rootReducer;