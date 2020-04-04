import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";


function Navigation() {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialog" activeClassName={s.active}>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>
            <div>
                <SidebarContainer/>
            </div>
        </div>

    );
}
export default Navigation;