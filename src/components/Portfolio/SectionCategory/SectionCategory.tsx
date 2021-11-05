import classes from './SectionCategory.module.css'

import PortfolioItem, { Item } from '../PortfolioItem/PortfolioItem';

export class Category {

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

type SectionCategoryProps = {
    category: Category;
}

const SectionCategory = ({ category }: SectionCategoryProps) => {

    const portfolioItems = category.items
        .sort((i1, i2) => i2.competence - i1.competence)
        .map(item => (
            <PortfolioItem
                key={item.name}
                item={item} />
        ));

    return (
        <>
            <div
                className={classes.CategoryName}
                style={{ gridRowStart: `span ${category.items.length}` }} >
                {category.name}
            </div>
            {portfolioItems}
        </>
    );
};


export default SectionCategory;
