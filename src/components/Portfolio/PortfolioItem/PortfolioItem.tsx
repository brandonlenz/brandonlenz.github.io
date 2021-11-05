import classes from './PortfolioItem.module.css'

import CompetencyBar from '../../UI/CompetencyBar/CompetencyBar';

export class Item {

    name: string;
    competence: number;

    constructor(name: string, competence: number) {
        this.name = name;
        this.competence = competence;
    }
}

type ItemProps = {
    item: Item
}

const PortfolioItem = ({ item }: ItemProps) => (
    <>
        <label className={classes.Label}>{item.name}</label>
        <CompetencyBar competence={item.competence} />
    </>
);

export default PortfolioItem;
