import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";
import Navigation from '../Navigation';

function Header(props)
{
    const {setNavSelected} = props;
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">  Raed Altaki </a>
            </h2>
            <Navigation setNavSelected = {setNavSelected} />
        </header>
    );
};

export default Header;