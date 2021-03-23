import React from 'react';
import './Content.css';
import Profile from "./pages/profile/Profile";
import Posts from "./pages/posts/posts";
import Dialogs from "./pages/dialogs/dialogs";
import {Route} from "react-router-dom";
import Settings from "./pages/settings/settings";

let postData = [
    {
        id: 1,
        post: 'Hi, how are yo',
        likeCount: 1
    },
    {
        id: 2,
        post: 'It\'s my first post',
        likeCount: 3
    }
];

const Content = () => {
    const posts = () => <Posts name={postData} />;
    return(
        <div className="content-holder">
            <div className="container">
                <Route path="/dialogs" component={Dialogs} />
                <Route path="/profile" component={Profile} />
                <Route path="/posts" name="test" component={posts} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default Content;