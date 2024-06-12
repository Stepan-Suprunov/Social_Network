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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render ()  {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

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
                        this.props.currentPage === page ? classes.selectedPage : classes.unSelectedPage}
                        onClick={() => {this.onPageChanged(page)}}>
                        {page}
                    </span>
                })}
            </div>
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