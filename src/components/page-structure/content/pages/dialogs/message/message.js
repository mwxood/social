import React from 'react';

const Message = (props) => {
    return(
        <div className="messages">
            <div className="message">{props.name}</div>
        </div>
    );
}

export default Message;