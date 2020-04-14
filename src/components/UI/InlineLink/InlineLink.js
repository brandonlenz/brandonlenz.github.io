import React from 'react';

import classes from './InlineLink.module.css'

const InlineLink = ({ link, children }) => (
    <a className={classes.InlineLink} href={link}>{children}</a>
);

export default InlineLink;
