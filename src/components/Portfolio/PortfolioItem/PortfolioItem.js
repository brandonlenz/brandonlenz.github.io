import React from 'react';

import classes from './PortfolioItem.module.css'

import CompetencyBar from '../../UI/CompetencyBar/CompetencyBar';

const PortfolioItem = ({name, competence}) => (
    <>
        <label className={classes.Label}>{name}</label>
        <CompetencyBar className={classes.CompetencyBar} competence={competence} />
    </>
);

export default PortfolioItem;
