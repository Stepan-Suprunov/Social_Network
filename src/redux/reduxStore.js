import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./usersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer
});

const store = configureStore({reducer: reducers});

export default store;