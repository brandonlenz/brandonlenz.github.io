import * as React from 'react'
import { Component } from 'react';

import classes from './Portfolio.module.css'

import PortfolioSection from '../../components/Portfolio/PortfolioSection/PortfolioSection';

class Item {

    name: string;
    competence: number;

    constructor(name: string, competence: number) {
        this.name = name;
        this.competence = competence;
    }
}

class Category {

    name: string;
    items: Array<Item> = [];

    constructor(name: string) {
        this.name = name;
    }

    addItem(name: string, competency: number): Category {
        this.items.push(new Item(name, competency));
        return this;
    }
}

class Section {

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

class PortfolioObject {

    sections: Array<Section> = [];

    addSection(section: Section): PortfolioObject {
        this.sections.push(section);
        return this;
    }

    toJSX(): Array<JSX.Element> {
        return this.sections
            .map(section => (
                <PortfolioSection
                    key={section.name}
                    name={section.name}
                    categories={section.categories} />
            ));
    }
}

const portfolio: PortfolioObject = new PortfolioObject()
    .addSection(
        new Section('Front-end')
            .addCategory(
                new Category('Languages')
                    .addItem('JavaScript', 8.5)
                    .addItem('HTML', 9)
                    .addItem('CSS', 8)
            )
            .addCategory(
                new Category('Libraries &\nFrameworks')
                    .addItem('React', 9)
                    .addItem('Angular', 7)
                    .addItem('AngularJS', 5)
            )
            .addCategory(
                new Category('Testing')
                    .addItem('Jest', 8)
            )
    )
    .addSection(
        new Section('Back-end')
            .addCategory(
                new Category('Languages')
                    .addItem('Java', 9.5)
                    .addItem('Groovy', 9)
                    .addItem('C#', 7)
                    .addItem('Python', 6)
                    .addItem('Ruby', 5)
                    .addItem('Swift', 4)
            )
            .addCategory(
                new Category('Frameworks')
                    .addItem('Spring', 8)
                    .addItem('Grails', 8)
                    .addItem('Rails',5)
            )
            .addCategory(
                new Category('Testing')
                    .addItem('JUnit', 9)
                    .addItem('Spock', 9)
            )
    );

interface PortfolioState {
    portfolio: PortfolioObject
}

class Portfolio extends Component<{}, PortfolioState> {

    state = {
        portfolio: portfolio
    };

    render() {
        const portfolioSections = this.state.portfolio.toJSX();

        return (
            <div className={classes.Portfolio}>
                <div className={classes.PortfolioSections}>
                    {portfolioSections}
                </div>
            </div>
        );
    }
}

export default Portfolio;
