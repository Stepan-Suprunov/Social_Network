let state = {
    profilePage: {
        posts: [
            {id:1, text:'Hi! How are you?', likes:15},
            {id:2, text:'It\'s my first message!', likes:25}
        ]
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
        ]
    }
};

export default state;