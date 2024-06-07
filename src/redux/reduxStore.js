import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {configureStore} from "@reduxjs/toolkit";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer
});

const store = configureStore({reducer: reducers});

export default store;