import * as React from 'react'
import { Component, ReactNode } from 'react';

import classes from './Portfolio.module.css'

import PortfolioSection, { Section } from "../../components/Portfolio/PortfolioSection/PortfolioSection";
import { Category } from "../../components/Portfolio/SectionCategory/SectionCategory";

class PortfolioModel {

    sections: Array<Section> = [];

    addSection(section: Section): PortfolioModel {
        this.sections.push(section);
        return this;
    }
}

const portfolio: PortfolioModel = new PortfolioModel()
    .addSection(
        new Section('Front-end')
            .addCategory(
                new Category('Languages')
                    .addItem('JavaScript', 8.5)
                    .addItem('TypeScript', 8)
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
                    .addItem('Spock', 9.5)
                    .addItem('JUnit', 9)
            )
    );

interface PortfolioState {
    portfolio: PortfolioModel
}

class Portfolio extends Component<{}, PortfolioState> {

    state = {
        portfolio: portfolio
    };

    render() {
        const portfolioSections: ReactNode = this.state.portfolio.sections
            .map(section => (
                <PortfolioSection
                    key={section.name}
                    section={section} />
            ));

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
