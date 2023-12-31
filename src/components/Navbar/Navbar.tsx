import React from 'react';
import s from '../Navbar/Navbar.module.css'
import {NavLink} from "react-router-dom";

type NavBarPropsType = {

}
const Navbar = (props:NavBarPropsType) => {
    return (
        <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
        </nav>
    );
}

export default Navbar