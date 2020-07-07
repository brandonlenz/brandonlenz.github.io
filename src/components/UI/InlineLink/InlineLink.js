import React from 'react';

import classes from './InlineLink.module.css'

const InlineLink = ({ url, text }) => (
    <a className={classes.InlineLink} href={url} target="_blank" rel="noreferrer noopener">{text}</a>
);

export default InlineLink;
