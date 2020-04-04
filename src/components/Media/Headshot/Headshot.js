import React from 'react';

import classes from './Headshot.module.css'

import HeadshotImage from '../../../assets/images/Headshot_300.png'

const Headshot = () => (
    <img className={classes.Headshot} src={HeadshotImage}  alt={"Brandon Lenz - Headshot"}/>
);

export default Headshot;
