import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props)
{   
    const {setNavSelected} = props;
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <span onClick={()=>setNavSelected("About me")}>About me</span>
                </li>
                <li className="mx-2">
                    <span onClick={()=>setNavSelected("Portfolio")}>Portfolio</span>
                </li>
                <li className='mx-2'>
                    <span onClick={()=>setNavSelected("Contact")}>Contact</span>
                </li>
                <li className="mx-2">
                    <span onClick={()=>setNavSelected("Resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;