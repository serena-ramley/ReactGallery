import React from 'react';

const Card = () => {
    return (
        // Use tachyons to create green background and grow upon hover
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img alt='robot' src='https://robohash.org/test?200x200' />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    )
}

export default Card;