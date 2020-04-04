import React from 'react';

import classes from './Contact.module.css'

const Contact = () => (
    //TODO: Change all of this into an email form
    <div className={classes.Contact}>
        <h3>Want to get in contact?</h3>
        <p>
            Please feel free to reach out to me through any of the provided avenues.
            If I'm not immediately available I'll return calls, emails, and messages promptly.
        </p>

        <h3>Contact Details</h3>
        <ul>
            <li>
                <a href="tel:404-323-3155">404-323-3155</a>
            </li>
            <li>
                <a href="mailto:brandonalenz@gmail.com">brandonalenz@gmail.com</a>
            </li>
            <li>
                <a href="http://linkedin.com/in/lenzbrandon">Contact Brandon on LinkedIn</a>
            </li>
        </ul>
    </div>
);

export default Contact;
