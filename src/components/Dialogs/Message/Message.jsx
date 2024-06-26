import classes from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.text}
        </div>
    );
};

export default Message