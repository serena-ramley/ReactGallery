import React from 'react';
import Card from './Card';

const CardList = ({cards}) => {
    return (
        <div>
            {
                cards.map( (card, i) => {
                    return (
                        <Card
                        key={i}
                        id={cards[i].id}
                        name={cards[i].name}
                        food={cards[i].food}
                        city={cards[i].city}
                        days_valid={cards[i].days_valid}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;