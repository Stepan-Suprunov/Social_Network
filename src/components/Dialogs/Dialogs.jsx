import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={classes.mesage}>
            {props.text}
        </div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Dialog 1' id='1' />
                <DialogItem name='Dialog 2' id='2' />
                <DialogItem name='Dialog 3' id='3' />
                <DialogItem name='Dialog 4' id='4' />
                <DialogItem name='Dialog 5' id='5' />
            </div>
            <div className={classes.messages}>
                <Message text='Hi!' />
                <Message text='How are you!' />
                <Message text="It's my first message!" />
            </div>
        </div>
    );
};

export default Dialogs;