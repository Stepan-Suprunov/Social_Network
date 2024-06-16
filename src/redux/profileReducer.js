const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    posts: [
        {id: 1, text: 'Hi! How are you?', likes: 15},
        {id: 2, text: 'It\'s my first message!', likes: 25}
    ],
    newPostText: '',
    profile: null
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        default:
            return state;
    };
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});