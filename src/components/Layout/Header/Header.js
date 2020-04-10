import React from 'react';
import { MdExpandMore } from 'react-icons/md';

import classes from './Header.module.css'
import background from '../../../assets/images/atlanta_skyline_piedmont_park_christopher_alvarenga_smaller.jpg'

import Navigation from '../../Navigation/Navigation';

const Header = () => (
    <header
        className={classes.Header}
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.75) 100%), url(${background})`
        }}>
        <div className={classes.HeaderText}>
            <div className={classes.FirstName}>Brandon</div>
            <div className={classes.LastName}>Lenz</div>
            <div className={classes.Title}>Engineer</div>
        </div>
        {/*<Navigation /> //TODO: Delete if not using navigation*/}
        <MdExpandMore className={classes.Caret} />
    </header>
);

export default Header;
