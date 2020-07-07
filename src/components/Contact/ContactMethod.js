import React from 'react';

import classes from './ContactMethod.module.css';

const ContactMethod = (props) => {
    const Icon = props.icon;
    return (
        <button className={classes.ContactMethod} onClick={() => window.open(props.url, "_blank")}>
            <Icon className={ classes.Icon } />
        </button>
    );
};

export default ContactMethod;