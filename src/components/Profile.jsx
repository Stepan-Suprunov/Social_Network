import classes from "./Style/Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://mirpozitiva.ru/wp-content/uploads/2019/11/1476889932_zakat-derevo.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;