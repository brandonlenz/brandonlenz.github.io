import React from 'react';

import classes from './Navigation.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => (
    <ul className={classes.Navigation}>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/portfolio">Portfolio</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
);

export default Navigation;
