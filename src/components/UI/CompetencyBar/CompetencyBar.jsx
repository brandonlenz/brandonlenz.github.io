import { useRef } from 'react';

import classes from './CompetencyBar.module.css'

import useVisible from '../../../hooks/useVisible';

const CompetencyBar = ({competence}) => {
    const ref = useRef(null);
    const displayedCompetence = useVisible(ref) ? competence : 0;

    return (
        <div ref={ref} className={classes.CompetencyBar}>
            <div className={classes.Competence} style={{ width: `${displayedCompetence / 10 * 100}%` }} />
        </div>
    );
};

export default CompetencyBar;
