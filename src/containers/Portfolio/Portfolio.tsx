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
                    .addItem('JavaScript', 9)
                    .addItem('TypeScript', 9)
                    .addItem('HTML', 9)
                    .addItem('CSS', 8)
            )
            .addCategory(
                new Category('Libraries &\nFrameworks')
                    .addItem('React', 9)
                    .addItem('Angular', 7.5)
                    .addItem('AngularJS', 4)
            )
            .addCategory(
                new Category('Testing')
                    .addItem('Jest', 8.5)
                    .addItem('Cypress', 7)
            )
    )
    .addSection(
        new Section('Back-end')
            .addCategory(
                new Category('Languages')
                    .addItem('Java', 9.5)
                    .addItem('Groovy', 9)
                    .addItem('Go', 7.5)
                    .addItem('C#', 7)
                    .addItem('Python', 6)
                    .addItem('Ruby', 5)
                    .addItem('Swift', 4)
            )
            .addCategory(
                new Category('Frameworks')
                    .addItem('Spring Boot', 9)
                    .addItem('Spring', 8)
                    .addItem('Grails', 8)
                    .addItem('Rails', 5)
            )
            .addCategory(
                new Category('Testing')
                    .addItem('Spock', 9)
                    .addItem('JUnit', 9)
            )
            .addCategory(
                new Category('Datastores')
                    .addItem('PostgreSQL', 9)
                    .addItem('MySQL', 8)
                    .addItem('Redis', 7)
                    .addItem('MongoDB', 5)
            )
    )
    .addSection(
        new Section('Other Technologies')
            .addCategory(
                new Category('API Protocols')
                    .addItem('REST', 9)
                    .addItem('GraphQL', 7.5)
                    
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
            <div className={classes.Portfolio} data-testid="portfolio-section">
                <div className={classes.PortfolioSections}>
                    {portfolioSections}
                </div>
            </div>
        );
    }
}

export default Portfolio;
