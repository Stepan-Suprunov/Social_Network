import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {configureStore} from "@reduxjs/toolkit";

const reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer
});

const store = configureStore({reducer});

export default store;