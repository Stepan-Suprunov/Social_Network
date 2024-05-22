import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'
                         className={navData => navData.isActive ? classes.active : classes.nonactive}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs'
                         className={navData => navData.isActive ? classes.active : classes.nonactive}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'
                         className={navData => navData.isActive ? classes.active : classes.nonactive}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'
                         className={navData => navData.isActive ? classes.active : classes.nonactive}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'
                         className={navData => navData.isActive ? classes.active : classes.nonactive}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;