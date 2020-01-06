import React, {Component} from 'react';
import CardList from './CardList';
import {cards} from './cards';
import SearchBox from './SearchBox';
import './App.css';

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


//                    

    render () {
        const filteredCards = this.state.cards.filter(card => {
            return (card.name.toLowerCase().includes(this.state.searchField.toLowerCase())
                || card.food.toLowerCase().includes(this.state.searchField.toLowerCase())
                || card.days_valid.map(day => day.toLowerCase()).includes(this.state.searchField.toLowerCase())
            )
        })
        return (
            <div className="tc">
                <h1 className="f1"> Featured Restaurants with Weekly Discounts</h1>
                <p> <i>Note: This app is to demo a gallery-style app.</i></p>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList cards = {filteredCards} />
            </div>
        )
    }
}

export default App;