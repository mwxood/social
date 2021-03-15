import React from "react";
import './Footer.css';

const date = function() {
    const date = new Date();
    return date.getFullYear();
}

const Footer = () => {
    return(
        <footer className="footer-holder">
            <div className="container">
                <p>Copyright &lt;Social app/&gt; {date()}. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;