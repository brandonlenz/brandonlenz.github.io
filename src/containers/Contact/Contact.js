import React from 'react';
import { FaRegEnvelope, FaLinkedinIn } from 'react-icons/fa'

import classes from './Contact.module.css'

const Contact = () => (
    <div className={classes.Contact}>
        <div className={classes.ContactHeader}>Want to get in contact?</div>

        <div className={classes.ContactMethods}>
            <div className={classes.ContactMethod}>
                <a href="mailto:brandonalenz@gmail.com">
                    <FaRegEnvelope className={classes.Icon}/>
                </a>
            </div>
            <div className={classes.ContactMethod}>
                <a href="http://linkedin.com/in/lenzbrandon">
                    <FaLinkedinIn className={classes.Icon}/>
                </a>
            </div>
        </div>
    </div>
);

export default Contact;
