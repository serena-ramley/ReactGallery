import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
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
                    <p> <i>Note: This app is to demo a searcheable gallery app.</i></p>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList cards = {filteredCards} />
                </div>
            )
        }
    }
}

export default App;