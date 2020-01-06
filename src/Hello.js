import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component {
    render() {
        return (
            // Use tachyons class to center text
        <div className='f1 tc'>
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
        </div>
        )
    }
}

export default Hello;