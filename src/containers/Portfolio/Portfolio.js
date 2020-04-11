import React, { Component } from 'react';

import classes from './Portfolio.module.css'

import PortfolioItem from '../../components/Portfolio/PortfolioItem/PortfolioItem';
import PortfolioSection from '../../components/Portfolio/PortfolioSection/PortfolioSection';

const portfolio = { //TODO: Get from firebase?
    sections: [
        {
            name: 'Front-end development',
            technologies: [
                {
                    name: 'React',
                    competence: 9
                },
                {
                    name: 'Angular',
                    competence: 7
                },
                {
                    name: 'JavaScript',
                    competence: 8.5
                },
                {
                    name: 'HTML',
                    competence: 9
                },
                {
                    name: 'CSS',
                    competence: 8
                }
            ]
        },
        {
            name: 'Back-end Development',
            technologies: [
                {
                    name: 'Java',
                    competence: 9.5
                },
                {
                    name: 'Groovy',
                    competence: 9
                },
                {
                    name: 'C#',
                    competence: 7
                },
                {
                    name: 'Python',
                    competence: 6
                },
                {
                    name: 'Swift',
                    competence: 5
                },
                {
                    name: 'Grails',
                    competence: 8
                },
                {
                    name: 'Spring',
                    competence: 8
                }
            ]
        },
        {
            name: 'Testing',
            technologies: [
                {
                    name: 'JUnit',
                    competence: 9
                },
                {
                    name: 'Spock',
                    competence: 9
                },
                {
                    name: 'Jest',
                    competence: 7
                }
            ]
        }
    ]
};

class Portfolio extends Component {

    state = {
        portfolio: portfolio
    };

    convertPortfolioToElements() {
        return this.state.portfolio.sections
            .map(section => (
                <PortfolioSection
                    key={section.name}
                    name={section.name}>
                    {section.technologies
                        .sort((t1, t2) => t2.competence - t1.competence)
                        .map(technology => (
                            <PortfolioItem
                                key={technology.name}
                                name={technology.name}
                                competence={technology.competence}/>
                        ))}
                </PortfolioSection>
            ));
    }

    render() {
        const portfolioSections = this.convertPortfolioToElements();

        return (
            <div className={classes.Portfolio}>
                {portfolioSections}
            </div>
        );
    }
}

export default Portfolio;
