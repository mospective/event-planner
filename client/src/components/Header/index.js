import React from "react";
// import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {

    return (
        <header className="header">
            <div className="logo-area">
              <h1>The Organizer</h1>
            </div>
            <div className="menu-space">
                {/* <ul>
                    <li><Link to="/page-one">Page 1</Link></li>
                    <li><Link to="/page-two">Page 2</Link></li>
                </ul> */}
            </div>
        </header>
    );
};

export default Header;