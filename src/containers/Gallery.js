import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {galleryFetchData,galleryUpload,galleryDelete,galleryUpdate} from '../actions/gallery.js';
import Gallery from '../components/Gallery/Gallery.js'

const mapStateToProps=(state)=>{
return{
        galleryData: state.rootReducer.gallery.galleryData,
        isLoading: state.rootReducer.gallery.galleryIsLoading,
        error : state.rootReducer.gallery.galleryError,
        id_active_user : state.rootReducer.activeUser.id //temporary, amd subject to change when viewing other peoples galleries
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        refresh: bindActionCreators(galleryFetchData,dispatch),
        upload: bindActionCreators(galleryUpload,dispatch),
        delete: bindActionCreators(galleryDelete,dispatch),
        update: bindActionCreators(galleryUpdate,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);