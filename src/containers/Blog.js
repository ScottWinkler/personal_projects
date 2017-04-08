import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {blogFetchData,blogLike,blogPost} from '../actions/blog.js';
import Blog from '../components/Blog/Blog.js'

const mapStateToProps=(state)=>{
return{
        blogData: state.rootReducer.blog
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        refresh: bindActionCreators(blogFetchData,dispatch),
        like: bindActionCreators(blogLike,dispatch),
        post: bindActionCreators(blogPost,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Blog);