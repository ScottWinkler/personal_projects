import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Nav from '../components/Nav/Nav.js';
import {push} from 'redux-little-router';
import {logout} from '../actions/logout.js';

const mapStateToProps=(state)=>{
return{
        username:state.rootReducer.activeUser ? state.rootReducer.activeUser.username : null,
        isAuthenticated: state.rootReducer.activeUser ? true : false
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        push: bindActionCreators(push,dispatch),
        logout: bindActionCreators(logout,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);