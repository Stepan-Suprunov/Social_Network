let store = {
    _state: {
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
    },

    getState (){
        return this._state;
    },

    rerenderEntireTree () {},

    addPost () {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            text: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.rerenderEntireTree(this._state);
    },

    updateNewPostText (newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this.rerenderEntireTree(this._state);
    },

    addMessage () {
        let newMessage = {
            id: this._state.messagesPage.messages.length + 1,
            text: this._state.messagesPage.newMessageText
        };
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this.rerenderEntireTree(this._state);
    },

    updateNewMessageText (newMessageText) {
        this._state.messagesPage.newMessageText = newMessageText;
        this.rerenderEStorentireTree(this._state);
    },

    subscribe (observer)  {
        this.rerenderEntireTree = observer;
    }
};

export default store;
window.store = store;