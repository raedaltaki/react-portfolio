import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Footer()
{   
    return (
        <footer>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="">
                        <span> Github </span>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="">
                        <span> LinkedIn </span>
                    </a>
                </li>
                <li className='mx-2'>
                    <a href="">
                        <span >StackOverFlow</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;