import React from 'react';

import classes from './Footer.module.css'

const Footer = () => (
    <footer className={classes.Footer}>
        <p className={classes.Copyright}>© 2015-{new Date().getFullYear()} Brandon Lenz</p>
    </footer>
);

export default Footer;
