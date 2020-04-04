import React from 'react';

import classes from './CompetencyBar.module.css'

const CompetencyBar = (props) => (
    <div className={classes.CompetencyBar}>
        <div className={classes.Competence} style={{ width: `${props.competence / 10 * 100}%` }} />
    </div>
)

export default CompetencyBar;