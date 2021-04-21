import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function AboutMe()
{   
    return (
        <div>
            <h2>About me</h2>
            <img src = {require(`../../assets/photos/split-photos/frame_0001_delay-0.07s.gif`).default}/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};

export default AboutMe;