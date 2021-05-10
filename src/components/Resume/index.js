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
        <div className="text-left m-5 " onClick={() => toggle(!state)}>
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