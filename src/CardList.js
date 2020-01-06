import React from 'react';
import Card from './Card';
import { cards } from './cards';

const CardList = ({cards}) => {
    const cardComponent = cards.map( (card, i) => {
        return <Card key={i} id={cards[i].id} name={cards[i].name} food={cards[i].food} city={cards[i].city} days_valid={cards[i].days_valid} />
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;