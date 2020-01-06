import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import Card from './Card';
import { cards } from './cards';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
        <div>
            <Card id={cards[0].id} name={cards[0].name} food={cards[0].food} city={cards[0].city} days_valid={cards[0].days_valid}/>
            <Card id={cards[1].id} name={cards[1].name} food={cards[1].food} city={cards[1].city} days_valid={cards[1].days_valid}/>
            <Card id={cards[2].id} name={cards[2].name} food={cards[2].food} city={cards[2].city} days_valid={cards[2].days_valid}/>
            </div>
            , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
