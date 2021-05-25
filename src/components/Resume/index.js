import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web';
import styles from '../../styles.module.css';

function Resume()
{   
    const [state, toggle] = useState(true)
    const { x } = useSpring({
      from: { x: 0 },
      x: state ? 1 : 0,
      config: { duration: 1000 },
    });
    return (
        <div className="text-center m-5 " onClick={() => toggle(!state)}>
            <h5> Download my Resume{` `}
                
                    <animated.div
                        className={styles.text}
                        style={{
                        opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                        scale: x.to({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                        })
                        }}
                        >
                        <a
                            href={require(`../../assets/resume/Resume_Raed Altaki_Web Developer.pdf`).default} 
                            target="_blank" 
                            download="Resume_Raed Altaki_Web Developer.pdf">
                        Click Here!!!
                        </a>
                    </animated.div>
                
            </h5>
            <br />
            <div className="d-flex flex-wrap justify-content-around">
                <div className="my-5">
                    <h3>Front-end Projiciencies</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                        <li>AJAX</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                        <li>MomentJs</li>
                        <li>DataTablesJs</li>
                        <li>JSON</li>
                        <li>XML</li>
                        <li>XSLT</li>
                        <li>CSS/JS Frameworks/Libraries</li>

                    </ul>
                </div>
                <div className="my-5">
                    <h3>Back-end Projiciencies</h3>
                    <ul>
                        <li>Node.Js</li>
                        <li>Express</li>
                        <li>express-session</li>
                        <li>inquirer</li>
                        <li>Nodemailer.Js</li>
                        <li>Jest</li>
                        <li>bcrypt</li>
                        <li>handlebars</li>
                        <li>sequelize</li>
                        <li>Mongoose</li>
                        <li>MySQL</li>
                        <li>SQLite</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>NOSQL</li>
                        <li>Apollo</li>
                        <li>GraphQL</li>
                        <li>JWT</li>
                        <li>webpack</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>context api</li>
                        <li>stripe</li>
                        <li>chakra-ui</li>
                        <li>MERN</li>
                        <li>PWA</li>
                        <li>TDD</li>
                        <li>OOP</li>
                        <li>MVC</li>
                        <li>REST APIs</li>
                        <li>C#</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;