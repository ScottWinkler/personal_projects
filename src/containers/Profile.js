import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Profile from '../components/Profile/Profile.js'
import {updateData,updateError} from '../actions/update.js';

const mapStateToProps=(state)=>{
return{
      // username: state.rootReducer.activeUser ? state.rootReducer.activerUser.username : null,
      // src: state.rootReducer.activeUser ? state.rootReducer.activeUser.src : null,
      // email: state.rootReducer.activeUser ? state.rootReducer.activeUser.email : null
      username: state.rootReducer.test_activeUser.username,
      src: state.rootReducer.activeUser ? state.rootReducer.activeUser.src : "cat_profile-512_dceqtz",
      email: state.rootReducer.test_activeUser.email,
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
