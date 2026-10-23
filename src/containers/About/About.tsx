import Reveal from '../../components/UI/Reveal/Reveal';

import classes from './About.module.css';

import Headshot from '../../components/Media/Headshot/Headshot';
import InlineLink from '../../components/UI/InlineLink/InlineLink';

const About = () => (
    <div className={classes.About} data-testid="about-section">
        <div className={classes.Content}>
            <Reveal animateIn='animate__fadeIn'>
                <div className={classes.FloatingHeadshot}>
                    <Headshot />
                </div>
            </Reveal>

            <Reveal animateIn='animate__fadeInUp'>
                <div className={classes.HelloHeader}>Hi, I'm Brandon!</div>
            </Reveal>

            <Reveal animateIn='animate__fadeInLeft'>
                <p>
                    I'm an engineer with a passion for building tools and services that are as intuitive to use as they
                    are to develop and maintain.
                    Technology is a powerful shaping force of modern society, and I believe that engineers have a
                    responsibility to use our skills in pursuit of improving the livelihoods of those around us.
                </p>
            </Reveal>
            <Reveal animateIn='animate__fadeInRight'>
                <p>
                    I know that a truly great experience, the kind that can have a real, positive impact, is achieved
                    through optimization of both form and function.
                    As an engineer, I understand that the best way to sustainably serve such an experience at scale is
                    to be conscientious in every step of the process.
                    After all, your fellow developers are users too.
                </p>
            </Reveal>
            <Reveal animateIn='animate__fadeInLeft'>
                <p>
                    Think of this page as a creative portfolio where I have the opportunity to showcase some of the
                    technologies I've learned. For a full professional summary and resume feel free to head over to
                    my <InlineLink text="LinkedIn" url="https://www.linkedin.com/in/lenzbrandon/" />.
                </p>
            </Reveal>
        </div>
    </div>
);

export default About;
