import React, { useState } from 'react';
import IntersectionVisible from 'react-intersection-visible'

import classes from './CompetencyBar.module.css'

const CompetencyBar = ({competence}) => {

    const [displayedCompetence, setDisplayedCompetence] = useState(competence);

    return (
        <IntersectionVisible
            onShow={() => setDisplayedCompetence(competence)}
            onHide={() => setDisplayedCompetence(0)}>
            <div className={classes.CompetencyBar}>
                <div className={classes.Competence} style={{ width: `${displayedCompetence / 10 * 100}%` }} />
            </div>
        </IntersectionVisible>
    );
};

export default CompetencyBar;
