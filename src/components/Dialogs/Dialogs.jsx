import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messageReducer";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesPage.messages.map(message => <Message text={message.text}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        props.dispatch(updateNewMessageTextActionCreator(newMessageElement.current.value));
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange}
                              ref={newMessageElement}
                              value={props.messagesPage.newMessageText}/>
                </div>
                <button onClick={addMessage}>Send Message</button>
            </div>
        </div>
    );
};

export default Dialogs;