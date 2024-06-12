import classes from "./Users.module.css";
import userPhotoDefault from "../../assets/images/user_avatar_default.png";
import React from "react";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount ; i++) {
        pages.push(i);
    };

    const followSwitch = (user) => {
        let follow = '';
        user.followed ? follow = 'Unfollow' : follow = 'Follow';
        return follow;
    };

    return <div>
        <div>
            {pages.map(page => {
                return <span className={
                    props.currentPage === page ? classes.selectedPage : classes.unSelectedPage}
                             onClick={() => {
                                 props.onPageChanged(page)
                             }}>
                        {page}
                    </span>
            })}
        </div>
        {
            props.users.map(user =>
                <div key={user.id}>
                        <span>
                            <div>
                                <img
                                    src={user.photos.small != null ? user.photos.small : userPhotoDefault}
                                    alt="Avatar"
                                    className={classes.userAvatar}
                                />
                            </div>
                            <div>
                                <button onClick={() => {
                                    props.modifyFollow(user.id)
                                }}>
                                    {followSwitch(user)}
                                </button>
                            </div>
                        </span>
                    <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    <span>
                            <div>{'props.user.location.city'}</div>
                            <div>{'props.user.location.country'}</div>
                        </span>
                </div>
            )
        };
    </div>
};

export default Users;