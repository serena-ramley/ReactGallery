import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            cards: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/serena-ramley/ReactGallery/cards')
            .then(response => response.json())
            .then(results => this.setState({cards: results}))
    }

    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value})
    }


//                    

    render () {
        const filteredCards = this.state.cards.filter(card => {
            return (card.name.toLowerCase().includes(this.state.searchField.toLowerCase())
                || card.city.toLowerCase().includes(this.state.searchField.toLowerCase())
                || card.food.toLowerCase().includes(this.state.searchField.toLowerCase())
                || card.days_valid.map(day => day.toLowerCase()).includes(this.state.searchField.toLowerCase())
            )
        })
        if (this.state.cards.length === 0) {
            return <h1 className="tc"> Loading ... </h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1"> Featured Restaurants with Weekly Discounts</h1>
                    <p className="near-white"> <i>Visit any of these restaurants on their specified days and show this app to get 10% off your meal!</i></p>
                    <p className="near-white"><i>Search by restaurant name, city, food available, or days the discount can be used.</i></p>
                    <p className="near-white"><i> Note: This app is just for fun and these restaurants are fictional</i></p>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <ErrorBoundary>
                        <CardList cards = {filteredCards} />
                    </ErrorBoundary>
                </div>
            )
        }
    }
}

export default App;