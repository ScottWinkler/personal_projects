//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {loginFetchData,loginError} from '../actions/login.js';
import App from '../components/App/App.js'

const mapStateToProps=(state)=>{
return{
        isAuthenticated: state.activeUser ? true : false,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
  //      handleSubmit: bindActionCreators(loginFetchData,dispatch),
    //    sendError: bindActionCreators(loginError,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);