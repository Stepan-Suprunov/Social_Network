import UserItem from "./UserItem/UserItem";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarUrl: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png',
                followed: true,
                fullName: 'User 1',
                status: 'Status',
                location: {country: 'Country', city: 'City'}
            },
            {
                id: 2,
                avatarUrl: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png',
                followed: true,
                fullName: 'User 2',
                status: 'Status',
                location: {country: 'Country', city: 'City'}
            },
            {
                id: 3,
                avatarUrl: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png',
                followed: false,
                fullName: 'User 3',
                status: 'Status',
                location: {country: 'Country', city: 'City'}
            },
            {
                id: 4,
                avatarUrl: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png',
                followed: false,
                fullName: 'User 4',
                status: 'Status',
                location: {country: 'Country', city: 'City'}
            }
        ])
    };

    let usersElements = props.users.map(user => <UserItem user={user} modifyFollow={props.modifyFollow}/>);

    return (
        <div>
            {usersElements}
        </div>
    );
};
export default Users;