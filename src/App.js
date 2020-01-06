import React from 'react';
import CardList from './CardList';
import {cards} from './cards';
import SearchBox from './SearchBox'

const App = () => {
    return (
        <div className="tc">
            <h1> Restaurants with Weekly Discounts</h1>
            <SearchBox />
            <CardList cards = {cards} />
        </div>
    )
}

export default App;