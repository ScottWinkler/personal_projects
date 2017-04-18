import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Nav from '../components/Nav/Nav.js';
import {push} from 'redux-little-router';
import {logout} from '../actions/logout.js';
import {toGallery} from '../actions/nav.js';
const mapStateToProps=(state)=>{
return{
        activeUser:state.rootReducer.activeUser,
        isAuthenticated: state.rootReducer.activeUser ? true : false
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        push: bindActionCreators(push,dispatch),
        logout: bindActionCreators(logout,dispatch),
        toGallery: bindActionCreators(toGallery,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);