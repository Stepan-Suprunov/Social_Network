import classes from "./UserItem.module.css";
import userPhotoDefault from '../../../assets/images/user_avatar_default.png'

const UserItem = (props) => {

    let follow = '';
    props.user.followed ? follow = 'Unfollow' : follow = 'Follow';

    return (
        <div>
            <span>
                <div>
                    <img
                        src={props.user.photos.small != null ? props.user.photos.small : userPhotoDefault}
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
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </span>
            <span>
                <div>{'props.user.location.city'}</div>
                <div>{'props.user.location.country'}</div>
            </span>
        </div>
    );
};

export default UserItem;