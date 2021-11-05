import { FaRegEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import classes from './Contact.module.css'

import ContactMethod from '../../components/Contact/ContactMethod';

const Contact = () => (
    <div className={classes.Contact} data-testid="contact-section">
        <div className={classes.ContactHeader}>Let's connect.</div>

        <div className={classes.ContactMethods}>
            <ContactMethod
                url="mailto:brandonalenz@gmail.com"
                icon={FaRegEnvelope}/>
            <ContactMethod
                url="http://linkedin.com/in/lenzbrandon"
                icon={FaLinkedinIn}/>
            <ContactMethod
                url="https://github.com/brandonlenz"
                icon={FaGithub}/>
        </div>
    </div>
);

export default Contact;
