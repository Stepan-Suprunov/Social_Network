import classes from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://mirpozitiva.ru/wp-content/uploads/2019/11/1476889932_zakat-derevo.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;