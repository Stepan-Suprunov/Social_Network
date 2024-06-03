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

    _callSubscriber () {},

    getState (){
        return this._state;
    },

    subscribe (observer)  {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                text: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: this._state.messagesPage.messages.length + 1,
                text: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
window.store = store;