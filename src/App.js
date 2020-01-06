import React, {Component} from 'react';
import CardList from './CardList';
import {cards} from './cards';
import SearchBox from './SearchBox'

class App extends Component {
    constructor() {
        super()
        this.state = {
            cards: cards,
            searchField: '',
        }
    }

    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value})
        //console.log(filteredCards);
    }


//                    || card.food.toLowerCase().includes(this.state.searchField.toLowerCase())

    render () {
        const filteredCards = this.state.cards.filter(card => {
            return (card.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc">
                <h1> Featured Restaurants with Weekly Discounts</h1>
                <p> <i>Note: This app is for demo purposes of a gallery-style app only (not a comprehensive business review app), and information on this page is not factual. Any resemblances to real or fictional restaurants is a coincidence.</i></p>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList cards = {filteredCards} />
            </div>
        )
    }
}

export default App;