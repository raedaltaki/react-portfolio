import React, { useEffect } from 'react';
import Portfolio from '../Portfolio';
import AboutMe from '../AboutMe';
import Resume from '../Resume';
import Contact from '../Contact';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Project()
{   
    return (
        <div>
            <AboutMe />
            <Portfolio />
            <Resume />
            <Contact />
        </div>
    );
};

export default Project;