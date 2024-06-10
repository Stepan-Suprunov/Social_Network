const MODIFY_FOLLOW = 'MODIFY-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODIFY_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        if (user.followed) return {...user, followed: false};
                        else return {...user, followed: true};
                    };
                    return user;
                })
            };

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};

        default:
            return state;
    };
};

export const modifyFollowAC = (userId) => ({
    type: MODIFY_FOLLOW,
    id: userId
});
export const setUsersAC = (users) => ({type: SET_USERS, users});