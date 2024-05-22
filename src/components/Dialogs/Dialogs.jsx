import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}
                     className={navData => navData.isActive ? classes.active : classes.nonactive}>{props.name}</NavLink>
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

    let dialogsData = [
        {id: 1, name: 'Name1'},
        {id: 2, name: 'Name2'},
        {id: 3, name: 'Name3'},
        {id: 4, name: 'Name4'},
        {id: 5, name: 'Name5'}
    ];

    let mesagesData = [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: "It's my first message!"}
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={classes.messages}>
                <Message text={mesagesData[0].text}/>
                <Message text={mesagesData[1].text}/>
                <Message text={mesagesData[2].text}/>
            </div>
        </div>
    );
};

export default Dialogs;