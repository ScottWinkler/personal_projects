
/*export function blogData(state={
    bloggersData:[{account_permissions:"c",id:"13",src:"DEFAULT_CAT_PIC",username:"pancake"}],
    commentData:[
    {datetime_created:"2017-04-06 11:16:23", datetime_modified:"2017-04-06 13:45:50",id:"1",id_creator:"13",id_owner:"13",message:"hello world",id_parent:null},
    {datetime_created:"2017-04-06 11:16:23", datetime_modified:"2017-04-06 13:45:50",id:"2",id_creator:"13",id_owner:"13",message:"It is good to be a cat",id_parent:null},
    {datetime_created:"2017-04-06 11:16:23", datetime_modified:"2017-04-06 13:45:50",id:"3",id_creator:"13",id_owner:"13",id_parent:"1",message:"hello world"}],
    likeData:[{
        id:"1",
        id_owner:"1",
        id_comment:"1",
        id_liker:"13"
    }]
},action){ */
export function blogData(state=null,action){
    switch(action.type){
        case 'BLOG_FETCH_DATA_SUCCESS':
            return action.blogData;
        default:
            return state;
    }
}