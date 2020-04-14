import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'

import classes from './CompetencyBar.module.css'

const CompetencyBar = (props) => {

    const [competence, setCompetence] = useState(0);

    useEffect(() => setCompetence(props.competence),[props.competence]);

    return (
        <div className={classes.CompetencyBar}>
            <div className={classes.Competence} style={{ width: `${competence / 10 * 100}%` }} />
        </div>
    );
};

export default CompetencyBar;
