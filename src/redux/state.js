import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id:1, text:'Hi! How are you?', likes:15},
            {id:2, text:'It\'s my first message!', likes:25}
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Name1'},
            {id: 2, name: 'Name2'},
            {id: 3, name: 'Name3'},
            {id: 4, name: 'Name4'},
            {id: 5, name: 'Name5'}
        ],
        messages: [
            {id: 1, text: 'Hi!'},
            {id: 2, text: 'How are you?'},
            {id: 3, text: "It's my first message!"}
        ],
        newMessageText: ''
    }
};

export let addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        text: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
};

export let addMessage = () => {
    let newMessage = {
        id: state.messagesPage.messages.length + 1,
        text: state.messagesPage.newMessageText
    };
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newMessageText) => {
    state.messagesPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
};

export default state;