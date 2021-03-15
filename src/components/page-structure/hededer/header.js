import './Header.css';
import Navigation from "./navigation/navigation";

const Header = () => {
    return(
        <header className="header-holder">
           <div className="header-inner">
               <h1>&lt; Social app /&gt;</h1>
               <Navigation />
           </div>
        </header>
    );
};

export default Header;