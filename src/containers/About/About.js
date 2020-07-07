import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import classes from './About.module.css';

import Headshot from '../../components/Media/Headshot/Headshot';
import InlineLink from '../../components/UI/InlineLink/InlineLink';

const About = () => (
    <div className={classes.About}>
        <ScrollAnimation animateIn='fadeInDown' animateOnce={true}>
            <div className={classes.FloatingHeadshot}>
                <Headshot />
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div className={classes.HelloHeader}>Hi, I'm Brandon!</div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
            <p>
                I'm an engineer with a passion for code and food. I love to optimize both
                form and function of whatever I'm currently working on. When cooking I want my food to look and taste
                delicious. Likewise, when coding I want my work's aesthetic and functionality to go hand in hand.
            </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
            <p>
                Think of this page as a creative portfolio where I have the opportunity
                to showcase some of the technologies I've learned. For a full professional summary and resume feel free to head over
                to my <InlineLink text="LinkedIn" url="https://www.linkedin.com/in/lenzbrandon/" />.
            </p>
        </ScrollAnimation>
    </div>
);

export default About;
