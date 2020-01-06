import React from 'react';

const Card = (props) => {
    return (
        // Use tachyons to create green background and grow upon hover
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className='br-pill' alt={props.food} src={`http://lorempixel.com/200/200/food/${props.id}`} width='200' height='200' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.city}</p>
                <p><i>{props.days_valid}</i></p>
            </div>
        </div>
    )
}

export default Card;