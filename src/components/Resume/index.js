import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Resume()
{   
    return (
        <div className="text-left">
            <h5> Download my {` `}
                <a href={require(`../../assets/resume/Resume_Raed Altaki_Web Developer.pdf`).default} target="_blank" download="Resume_Raed Altaki_Web Developer.pdf" >
                    Resume
                </a>
            </h5>
            <br />
            <h3>Front-end Projiciencies</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>AJAX</li>
                <li>Bootstrap</li>
                <li>MomentJs</li>
            </ul>
            <h3>Back-end Projiciencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node.Js</li>
                <li>Express</li>
                <li>inquirer</li>
                <li>Jest</li>
                <li>bcrypt</li>
                <li>SQL</li>
                <li>NOSQL</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>sequelize</li>
                <li>handlebars</li>
                <li>React</li>
            </ul>
        </div>
    );
};

export default Resume;