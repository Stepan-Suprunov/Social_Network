import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Dialog
                </div>
                <div className={classes.dialog}>
                    Dialog
                </div>
                <div className={classes.dialog}>
                    Dialog
                </div>
                <div className={classes.dialog}>
                    Dialog
                </div>
                <div className={classes.dialog}>
                    Dialog
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