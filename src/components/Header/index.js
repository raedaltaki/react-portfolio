import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";
import Navigation from '../Navigation';

function Header()
{
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">  Raed Altaki </a>
            </h2>
            <Navigation />
        </header>
    );
};

export default Header;