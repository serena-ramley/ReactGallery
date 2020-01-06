import React from 'react';

const Card = ( {food, id, name, city, days_valid}) => {
    return (
        // Use tachyons to create green background and grow upon hover
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className='br-pill' alt={food} src={`http://lorempixel.com/200/200/food/${id}`} width='200' height='200' />
            <div>
                <h2>{name}</h2>
                <p>{city}</p>
                <p><i>{days_valid}</i></p>
            </div>
        </div>
    )
}

export default Card;