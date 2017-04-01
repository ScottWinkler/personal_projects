import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Profile from '../components/Profile/Profile.js'
import {updateData,updateError} from '../actions/update.js';

const createDateFromMySQL=function(mysql_string){
     let t = mysql_string.split(/[- :]/);
       return new Date(t[0], t[1] - 1, t[2],  0,  0,  0).toLocaleDateString(); 
}
const mapStateToProps=(state)=>{
return{
      username: state.rootReducer.activeUser ? state.rootReducer.activeUser.username : null,
      email: state.rootReducer.activeUser ? state.rootReducer.activeUser.email : null,
      src: state.rootReducer.activeUser.src ? state.rootReducer.activeUser.src : "cat_profile-512_dceqtz",
       // username: state.rootReducer.test_activeUser.username,
        //email: state.rootReducer.test_activeUser.email,
        //src: state.rootReducer.test_activeUser.src,
       // signupDate:createDateFromMySQL(state.rootReducer.test_activeUser.signupDate),
      signupDate: createDateFromMySQL(state.rootReducer.activeUser.signupDate),
      error:state.rootReducer.update.updateError,
      isValidating:state.rootReducer.update.updateIsValidating,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        update:bindActionCreators(updateData,dispatch),
        sendError: bindActionCreators(updateError,dispatch),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
