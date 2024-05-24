import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Name1'},
        {id: 2, name: 'Name2'},
        {id: 3, name: 'Name3'},
        {id: 4, name: 'Name4'},
        {id: 5, name: 'Name5'}
    ];

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messages = [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: "It's my first message!"}
    ];

    let messagesElements = messages.map(message => <Message text={message.text}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;