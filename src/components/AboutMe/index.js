import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function AboutMe()
{   
    return (
        <div>
            <img className="avatar mb-5" src = {require(`../../assets/photos/profilephoto.JPG`).default}/>
            <p>
            A Dynamic full-stack web developer from Ontario, Canada.
            <br/>
            I enjoy building websites and coding specially in 
            <br/>
            HTML, CSS, JavaScript, Jquery, Bootstrap, MaterializeCSS, MomentJs, AJAX, NODE.js, Express.js, express-session,
            <br />
            MYSQL, Sequelize.Js, Handlebars.Js, Brypt.Js, Nodemailer.Js, jest, REST, OOL, TDD and C#.
            </p>
        </div>
    );
};

export default AboutMe;