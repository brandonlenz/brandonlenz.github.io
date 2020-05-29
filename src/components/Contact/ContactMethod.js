import React from 'react';

import classes from './ContactMethod.module.css';

const ContactMethod = (props) => {
    const Icon = props.icon;
    return (
        <div className={classes.ContactMethod} onClick={() => window.open(props.url, "_blank")}>
            <Icon className={ classes.Icon }/>
        </div>
    );
};

export default ContactMethod;