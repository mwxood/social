import React from "react";
import './Navigation.css';
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return(
        <nav className="nav-holder">
            <ul>
                <li><NavLink activeClassName="nav-active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="nav-active" to="/profile">Profile</NavLink></li>
                <li><NavLink activeClassName="nav-active" to="/dialogs">Dialogs</NavLink></li>
                <li><NavLink activeClassName="nav-active" to="/posts">Posts</NavLink></li>
                <li><NavLink activeClassName="nav-active" to="/music">Music</NavLink></li>
                <li><NavLink activeClassName="nav-active" to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;