import * as React from 'react'
import { Component } from 'react';

import classes from './Portfolio.module.css'

import PortfolioSection from '../../components/Portfolio/PortfolioSection/PortfolioSection';

interface Named {
    name: string;
}

interface Item extends Named {
    competence: number;
}

interface Category extends Named {
    items: Array<Item>;
}

interface Section extends Named {
    categories: Array<Category>;
}

const sections: Array<Section> = [
    {
        name: 'Front-end',
        categories: [
            {
                name: 'Languages',
                items: [
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
                name: 'Libraries &\nFrameworks',
                items: [
                    {
                        name: 'React',
                        competence: 9
                    },
                    {
                        name: 'Angular',
                        competence: 7
                    },
                    {
                        name: 'AngularJS',
                        competence: 5
                    }
                ]
            },
            {
                name: 'Testing',
                items: [
                    {
                        name: 'Jest',
                        competence: 8
                    }
                ]
            }
        ]
    },
    {
        name: 'Back-end',
        categories: [
            {
                name: 'Languages',
                items: [
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
                        name: 'Ruby',
                        competence: 5
                    },
                    {
                        name: 'Swift',
                        competence: 4
                    }
                ]
            },
            {
                name: 'Frameworks',
                items: [
                    {
                        name: 'Spring',
                        competence: 8
                    },
                    {
                        name: 'Grails',
                        competence: 8
                    },
                    {
                        name: 'Rails',
                        competence: 5
                    }
                ]
            },
            {
                name: 'Testing',
                items: [
                    {
                        name: 'JUnit',
                        competence: 9
                    },
                    {
                        name: 'Spock',
                        competence: 9
                    }
                ]
            }
        ]
    }
];

interface PortfolioState {
    sections: Array<Section>
}

class Portfolio extends Component<{}, PortfolioState> {

    state = {
        sections: sections
    };

    render() {
        const portfolioSections = this.state.sections
            .map(section => (
                <PortfolioSection
                    key={section.name}
                    name={section.name}
                    categories={section.categories} />
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
