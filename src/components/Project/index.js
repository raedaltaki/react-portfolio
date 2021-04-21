import React, { useEffect } from 'react';
import Portfolio from '../Portfolio';
import AboutMe from '../AboutMe';
import Resume from '../Resume';
import Contact from '../Contact';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Project(props)
{   
    const {navSelected } = props;
    return (
        <div>
            {navSelected === "About me" && <AboutMe />}
            {navSelected === "Portfolio" && <Portfolio />}
            {navSelected === "Resume" && <Resume />}
            {navSelected === "Contact" && <Contact />}
        </div>
    );
};

export default Project;