import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.image}
                     src='https://mirpozitiva.ru/wp-content/uploads/2019/11/1476889932_zakat-derevo.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo