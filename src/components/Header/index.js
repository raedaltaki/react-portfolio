import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";
import Navigation from '../Navigation';

function Header(props)
{
    const {navSelected , setNavSelected} = props;

    useEffect(() => 
    {
        document.title = navSelected;
    }, [navSelected]);
    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <a className= "navbar-brand title" data-testid="link" href="#">  Raed Altaki </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <Navigation navSelected = {navSelected} setNavSelected = {setNavSelected} />
            </nav>
        </header>
    );
};

export default Header;