import React from 'react';
import { MdExpandMore } from 'react-icons/md';

import classes from './Header.module.css'
import background from '../../../assets/images/atlanta_skyline_piedmont_park_christopher_alvarenga_smaller.jpg'

const Header = ({ onScrollToNext }) => (
    <>
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
            <MdExpandMore className={classes.Caret} onClick={onScrollToNext}/>
        </header>
    </>
);

export default Header;
