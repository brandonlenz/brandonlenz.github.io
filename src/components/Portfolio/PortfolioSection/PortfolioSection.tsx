import { Component, ReactNode } from 'react';

import classes from './PortfolioSection.module.css'

import SectionCategory, { Category } from "../SectionCategory/SectionCategory";

export class Section {

    name: string;
    categories: Array<Category> = [];

    constructor(name: string) {
        this.name = name;
    }

    addCategory(category: Category): Section {
        this.categories.push(category);
        return this;
    }
}

type PortfolioSectionProps = {
    section: Section
}

class PortfolioSection extends Component<PortfolioSectionProps> {

    getCategories = () => (
        this.props.section.categories.map<ReactNode>(category => (
            <SectionCategory
                key={category.name}
                category={category} />
        ))
        .reduce((acc, curr, index) => [acc, <div key={index} className={classes.Separator} />, curr])
    );

    render() {
        return (
            <>
                <div className={classes.SectionName}>{this.props.section.name}</div>
                {this.getCategories()}
            </>
        );
    }
}

export default PortfolioSection;
