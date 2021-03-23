import React from "react";
import './Header.css';
import Navigation from "./navigation/navigation";

const Header = (props) => {
    const image = props.name.map(item => {
        return(
            <img key={item.id} src={item.src} alt=""/>
        );
    })
    return(
        <header className="header-holder">
           <div className="header-inner">
               <h1>&lt;Social app/&gt;</h1>
               <Navigation />
           </div>
            <div className="container">
                <div className="banner">
                    {image}
                </div>
            </div>
        </header>
    );
};

export default Header;