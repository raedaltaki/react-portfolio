// import React, { useEffect } from 'react';
// // import { capitalizeFirstLetter } from "../../utils/helpers";

// function AboutMe()
// {   
//     return (
//         <div>
//             <img className="avatar mb-5" src = {require(`../../assets/photos/profilephoto.JPG`).default}/>
//             <p>
//             <span className="highlight">A Dynamic full-stack web developer</span> from Ontario, Canada.
//             <br/>
//             I enjoy building websites and coding specially in 
//             <br/>
//             HTML, CSS, JavaScript, Jquery, Bootstrap, MaterializeCSS, MomentJs, AJAX, NODE.js, Express.js, express-session,
//             <br />
//             MYSQL, Sequelize.Js, Handlebars.Js, Brypt.Js, Nodemailer.Js, jest, REST, OOL, TDD and C#.
//             </p>
//         </div>
//     );
// };

// export default AboutMe;

import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'

import styles from '../../styles.module.css'

function AboutMe()
{   
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
    });

    return (
        <div className="">
            <div className="avatar shadow-1-strong rounded m-auto shk">
                <div className="avatar-overlay shk" onClick={() => set(state => !state)}></div>
                <div className= " mx-auto avatar-image mb-5" onClick={() => set(state => !state)}>
                    <a.div
                        className={`${styles.c} ${styles.front}`}
                        style={{ opacity: opacity.to(o => 1 - o), transform }}
                    />
                    <a.div
                        className={`${styles.c} ${styles.back}`}
                        style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                        }}
                    />
                </div>
                <div className="avatar-details fadeIn-bottom">
                    <h3 onClick={() => set(state => !state)}>Flip!</h3>
                </div>
            </div>
            {/* <img className="avatar mb-5" src = {require(`../../assets/photos/profilephoto.JPG`).default}/> */}
            <p>
            <span className="highlight">A Dynamic full-stack web developer</span> from Ontario, Canada.
            <br/>
            I enjoy building websites and coding specially in 
            <br/>
            HTML5, CSS3, JavaScript, JQuery, Bootstrap, MaterializeCSS, MomentJs, DataTablesJs, AJAX, NODE.js, Express.js, express-session,
            <br />
            inquirer, MYSQL, SQLite, SQL, Sequelize.Js, Handlebars.Js, Bcrypt.Js, Nodemailer.Js, jest, REST APIs, JSON, XML, XSLT, webpack,
            <br />
            MERN, React, Redux, context api, MongoDB, Mongoose, NOSQL, GraphQL, Apollo, stripe, chakra-ui, JWT, MVC, PWA, OOP, TDD and C#.
            </p>
        </div>
    );
};

export default AboutMe;