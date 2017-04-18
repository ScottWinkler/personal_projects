export function galleryError(state=null,action){
    switch(action.type){
        case 'GALLERY_ERROR':
            return action.error;
        default:
            return state;
    }
}

export function galleryIsLoading(state=false,action){
    switch(action.type){
        case 'GALLERY_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
/*
export function galleryData(state = 
[
    {
        id: '1',
        src: 'A',
        description: "this is a description",
        title: "some title goes here",
        datetime_created: "2017-04-10 13:00:32",
        id_user: '13',
    },
    {
        id: '2',
        src: 'B',
        description: "this is a description",
        title: "some title goes here",
        datetime_created: "2017-04-10 13:00:32",
        id_user:'13'
    }
], action) {*/
export function galleryData(state=null,action){
    switch (action.type) {
        case 'GALLERY_DATA_SUCCESS':
            return action.gallery;
        default:
            return state;
    }
}
