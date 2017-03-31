import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {signupFetchData,signupError} from '../actions/signup.js';
import Signup from '../components/Authentication/Signup.js'

const mapStateToProps=(state)=>{
return{
        activeUser: state.rootReducer.activeUser ? state.rootReducer.activeUser : null,
        error: state.rootReducer.signup ? state.rootReducer.signup.signupError : null,
        isValidating: state.rootReducer.signup ? state.rootReducer.signup.signupIsValidating : null,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        handleSubmit: bindActionCreators(signupFetchData,dispatch),
        sendError: bindActionCreators(signupError,dispatch),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Signup);