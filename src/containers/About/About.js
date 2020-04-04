import React from 'react';

import classes from './About.module.css'

import Headshot from '../../components/Media/Headshot/Headshot';

const About = () => (
    <div className={classes.About}>
        <div className={classes.FloatingHeadshot}>
            <Headshot />
        </div>
        <p>
            Hello and welcome to my website! I'm an engineer with a passion for code and food. I love to optimize both
            form and function of whatever I'm currently working on. When cooking I want my food to look and taste
            delicious. Likewise, when coding I want my work's aesthetic and functionality to go hand in hand.
        </p>
        <p>
            Think of this page as a creative portfolio where I have the opportunity
            to showcase some of the technologies I've learned. For a full professional summary feel free to head over
            to my <a href="https://www.linkedin.com/in/lenzbrandon/">LinkedIn</a>.
        </p>
    </div>
);

export default About;
