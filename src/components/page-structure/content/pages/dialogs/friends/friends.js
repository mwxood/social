import React from 'react';
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    let path = `/dialogs/${props.id}`;
    return(
        <div className="friend-item">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default Friends;