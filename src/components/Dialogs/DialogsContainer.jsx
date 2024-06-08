import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    };

                    let updateNewMessageText = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    };

                    return <Dialogs messagesPage={state.messagesPage}
                             addMessage={addMessage}
                             updateNewMessageText={updateNewMessageText}/>;
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;