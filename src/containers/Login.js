import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginFetchData,loginError} from '../actions/login.js';
import Login from '../components/Authentication/Login.js'

const mapStateToProps=(state)=>{
return{
        activeUser: state.rootReducer.activeUser,
        error: state.rootReducer.login.loginError,
        isValidating: state.rootReducer.login.loginIsValidating,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        handleSubmit: bindActionCreators(loginFetchData,dispatch),
        sendError: bindActionCreators(loginError,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);