import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>Dialog1</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Dialog2</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Dialog3</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Dialog4</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Dialog5</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.mesage}>
                    Hi!
                </div>
                <div className={classes.mesage}>
                    How are you?
                </div>
                <div className={classes.mesage}>
                    Hello World!
                </div>
            </div>
        </div>
    );
};

export default Dialogs;