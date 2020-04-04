import React from 'react';

import classes from './PortfolioItem.module.css'
import CompetencyBar from '../../UI/CompetencyBar/CompetencyBar';

const PortfolioItem = (props) => (
    <>
        <label className={classes.Label}>{props.name}</label>
        <CompetencyBar competence={props.competence} />
    </>
);

export default PortfolioItem;
