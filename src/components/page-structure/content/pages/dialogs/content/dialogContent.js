import React from 'react';
import Friends from "../friends/friends";
import Message from "../message/message";
import PostMessage from "../message/postmessage";

const DialogContent = (props) => {
    let dialogs = props.name.map(item => <Friends key={item.id} name={item.name} id={item.id} />);
    let messages = props.message.map(item => <Message id={item.id} name={item.message} key={item.id} />);

    return(
        <div className="dialogs-holder">
            <div className="friend-holder">
                {dialogs}
            </div>

            <div className="message-holder">
                {messages}
                <div className="add-post-holder">
                    <PostMessage />
                </div>
            </div>
        </div>

    );
}

export default DialogContent;