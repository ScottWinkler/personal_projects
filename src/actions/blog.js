import {postURL} from '../utilities/xmlhttp.js';
import {push} from 'redux-little-router';
export function blogIsLoading(bool){
    return{
        type:"BLOG_IS_LOADING",
        isLoading: bool
    }
}
export function blogFetchData(input) {
    return (dispatch) => {
        dispatch(blogIsLoading(true));
        postURL("/php/get_comments.php", input)
            .then(
            //success
            function (res) {
                console.log(res);
                var commentData = JSON.parse(res);
                postURL("/php/get_likes.php", input).then(
                    //success
                    function (res) {
                        console.log(res);
                        var likesData = JSON.parse(res);
                        postURL("/php/get_bloggers.php", input).then(
                            //success
                            function (res) {
                                console.log(res);
                                var bloggersData = JSON.parse(res);
                                dispatch(blogIsLoading(false));
                                dispatch(blogError(null));
                                dispatch(blogFetchDataSuccess({ commentData, likesData, bloggersData }));
                            },
                            function (error) {
                                dispatch(blogIsLoading(false));
                                dispatch(blogError("DATABASE_ERROR"));
                            }
                        )
                    }
                    ,
                    function (error) {
                        dispatch(blogIsLoading(false));
                        dispatch(blogError("DATABASE_ERROR"));
                    }
                )
            },
            //failure
            function (error) {
                dispatch(blogIsLoading(false));
                dispatch(blogError("DATABASE_ERROR"));
            });
    }
}

export function blogFetchDataSuccess(blogData){
    return{
        type: "BLOG_FETCH_DATA_SUCCESS",
        blogData
    }
}

export function blogError(error){
    return{
        type: "BLOG_ERROR",
        error
    }
}

export function blogPost(input){
     return (dispatch) => {
        postURL("/php/post_comment.php", input)
            .then(
            //success
            function (res) {
                dispatch(blogFetchData(input));
            },
            //failure
            function (error) {
                dispatch(blogError("DATABASE_ERROR"));
            });
    }
}

export function blogLike(input){
    return (dispatch) => {
        postURL("/php/like_comment.php", input)
            .then(
            //success
            function (res) {
                dispatch(blogFetchData(input));
            },
            //failure
            function (error) {
                dispatch(blogError("DATABASE_ERROR"));
            });
    }
}