import UserItem from "./UserItem/UserItem";
import axios from "axios";

let Users = (props) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });

        // props.setUsers([
        //     {
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
        //     },
        //     {
        //         id: 2,
        //         avatarUrl: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png',
        //         followed: true,
        //         fullName: 'User 2',
        //         status: 'Status',
        //         location: {country: 'Country', city: 'City'}
        //     },
        //     {
        //         id: 3,
        //         avatarUrl: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png',
        //         followed: false,
        //         fullName: 'User 3',
        //         status: 'Status',
        //         location: {country: 'Country', city: 'City'}
        //     },
        //     {
        //         id: 4,
        //         avatarUrl: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png',
        //         followed: false,
        //         fullName: 'User 4',
        //         status: 'Status',
        //         location: {country: 'Country', city: 'City'}
        //     }
        // ])
    };

    let usersElements = props.users.map(user => <UserItem user={user} modifyFollow={props.modifyFollow}/>);

    return (
        <div>
            {usersElements}
        </div>
    );
};
export default Users;