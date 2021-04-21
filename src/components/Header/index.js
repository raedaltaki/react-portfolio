import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";
import Navigation from '../Navigation';

function Header(props)
{
    const {navSelected , setNavSelected} = props;
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className= "navbar-brand" data-testid="link" href="#">  Raed Altaki </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Navigation navSelected = {navSelected} setNavSelected = {setNavSelected} />
            </nav>
        </header>
    );
};

export default Header;