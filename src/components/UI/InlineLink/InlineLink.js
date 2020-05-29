import React from 'react';

import classes from './InlineLink.module.css'

const InlineLink = ({ url, text }) => (
    <a className={classes.InlineLink} onClick={() => window.open(url, "_blank")}>{text}</a>
);

export default InlineLink;
