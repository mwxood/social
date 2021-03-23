import React from 'react';

const Post = (props) => {
    return (
        <div className="post-holder">
            <img src="" alt=""/>
            <p>{props.message}</p>
            <span>Likes {props.like_count}</span>
        </div>
    );
}

export default Post;