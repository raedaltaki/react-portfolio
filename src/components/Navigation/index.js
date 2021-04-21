import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props)
{   
    const {navSelected , setNavSelected} = props;
    return (
        <div className= "collapse navbar-collapse"  id="navbarNav">
            <ul className="navbar-nav">
                <li className={`nav-item btn ${navSelected === "About me" && "active"}`}>
                    <span className="nav-link" onClick={()=>setNavSelected("About me")}>About me</span>
                </li>
                <li className={`nav-item btn ${navSelected === "Portfolio" && "active"}`}>
                    <span className="nav-link" onClick={()=>setNavSelected("Portfolio")}>Portfolio</span>
                </li>
                <li className={`nav-item btn ${navSelected === "Contact me" && "active"}`}>
                    <span className="nav-link" onClick={()=>setNavSelected("Contact me")}>Contact</span>
                </li>
                <li className={`nav-item btn ${navSelected === "Resume" && "active"}`}>
                    <span className="nav-link" onClick={()=>setNavSelected("Resume")}>Resume</span>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;