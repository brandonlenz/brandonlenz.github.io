import React from 'react';

import classes from './SectionCategory.module.css'
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const SectionCategory = ({name, categoryItems}) => {

    const portfolioItems = categoryItems
        .sort((i1, i2) => i2.competence - i1.competence)
        .map(item => (
            <PortfolioItem
                key={item.name}
                name={item.name}
                competence={item.competence} />
        ));

    return (
        <>
            <div
                className={classes.CategoryName}
                style={{ gridRowStart: `span ${categoryItems.length}` }} >
                {name}
            </div>
            {portfolioItems}
        </>
    );
};


export default SectionCategory;
