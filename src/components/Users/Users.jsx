import React from 'react';
import userPhotoDefault from "../../assets/images/user_avatar_default.png";
import classes from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {

    //         id: 1,
    //         photos: {
    //                small: null,
    //                large: null
    //         },
    //         followed: true,
    //         name: 'User 1',
    //         status: 'Status',
    //         location: {country: 'Country', city: 'City'},
    //         uniqueUrlName: null

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render ()  {

        const followSwitch = (user) => {
            let follow = '';
            user.followed ? follow = 'Unfollow' : follow = 'Follow';
            return follow;
        }

        return <div>
            {
                this.props.users.map(user =>
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
                                    this.props.modifyFollow(user.id)
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
};

export default Users;