import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return <Dialogs messagesPage={state.messagesPage}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}/>;
};

export default DialogsContainer;