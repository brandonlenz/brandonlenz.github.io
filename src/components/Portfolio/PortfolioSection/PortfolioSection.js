import React, { Component } from 'react';

import classes from './PortfolioSection.module.css'

import SectionCategory from '../SectionCategory/SectionCategory';

class PortfolioSection extends Component {

    getCategories = () => (
        this.props.categories
            .map(category => (
                    <SectionCategory
                        key={category.name}
                        name={category.name}
                        categoryItems={category.items}/>
            ))
            .reduce((acc, curr, index) => [acc, <div key={index} className={classes.Separator} />, curr])
    );

    render() {
        return (
            <>
                <div className={classes.SectionName}>{this.props.name}</div>
                {this.getCategories()}
            </>
        );
    }
}

export default PortfolioSection;
