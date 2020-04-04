import React from 'react';

import classes from './Header.module.css'

import Navigation from '../../Navigation/Navigation';

const Header = () => (
    <header>
        <div className={classes.Header}>
            <h1>Brandon Lenz</h1>
            <h2>Engineer</h2>
        </div>
        <Navigation />
    </header>
);

export default Header;
