import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Profile from '../components/Profile/Profile.js'
import {profileError,profileData} from '../actions/profile.js';

const createDateFromMySQL=function(mysql_string){
     let t = mysql_string.split(/[- :]/);
       return new Date(t[0], t[1] - 1, t[2],  0,  0,  0).toLocaleDateString(); 
}
const mapStateToProps=(state)=>{
return{
      username: state.rootReducer.activeUser ? state.rootReducer.activeUser.username : null,
      email: state.rootReducer.activeUser ? state.rootReducer.activeUser.email : null,
      src: state.rootReducer.activeUser ? state.rootReducer.activeUser.src : 'DEFAULT_CAT_PIC',
      signupDate: createDateFromMySQL(state.rootReducer.activeUser.sign_up_date),
      error:state.rootReducer.profile.profileError,
      isValidating:state.rootReducer.profile.profileIsValidating,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        update:bindActionCreators(profileData,dispatch),
        sendError: bindActionCreators(profileError,dispatch),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
