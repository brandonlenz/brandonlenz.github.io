import React from 'react';
import { FaRegEnvelope, FaLinkedinIn } from 'react-icons/fa'

import classes from './Contact.module.css'

import ContactMethod from '../../components/Contact/ContactMethod';

const Contact = () => (
    <div className={classes.Contact}>
        <div className={classes.ContactHeader}>Want to get in contact?</div>

        <div className={classes.ContactMethods}>
            <ContactMethod
                url="mailto:brandonalenz@gmail.com"
                icon={FaRegEnvelope}/>
            <ContactMethod
                url="http://linkedin.com/in/lenzbrandon"
                icon={FaLinkedinIn}/>
        </div>
    </div>
);

export default Contact;
