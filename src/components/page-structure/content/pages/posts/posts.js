import React from 'react';
import Post from "./post/post";

const Posts = (props) => {
    let post = props.name.map(item => <Post  like_count={item.likeCount} message={item.post} id={item.id} key={item.id} />);
    return(
        <div>
            {post}
        </div>
    );
}

export default Posts;