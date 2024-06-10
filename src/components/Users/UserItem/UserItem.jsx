import classes from "./UserItem.module.css";

const UserItem = (props) => {

    let follow = '';
    props.user.followed ? follow = 'Unfollow' : follow = 'Follow';

    return (
        <div>
            <span>
                <div>
                    <img
                        src={props.user.avatarUrl}
                        alt="Avatar"
                        className={classes.userAvatar}
                    />
                </div>
                <div>
                    <button onClick={() => {props.modifyFollow(props.user.id)}}>
                        {follow}
                    </button>
                </div>
            </span>
            <span>
                <div>{props.user.fullName}</div>
                <div>{props.user.status}</div>
            </span>
            <span>
                <div>{props.user.location.city}</div>
                <div>{props.user.location.country}</div>
            </span>
        </div>
    );
};

export default UserItem;