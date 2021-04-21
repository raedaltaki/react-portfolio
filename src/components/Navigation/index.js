import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation()
{   
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <span> About me </span>
                </li>
                <li className="mx-2">
                    <span> Portfolio </span>
                </li>
                <li className='mx-2'>
                    <span >Contact</span>
                </li>
                <li className="mx-2">
                    <span> Resume </span>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;