import React, { Component } from 'react';
import './App.css';
import Decrement from './Decrement';
import ContactCard from './ContactCard';

class App extends Component {
    render () {
        return (
            <div>
            <div id="left"><ContactCard/></div>
            <div id="right"><Decrement count={10}/></div>
            </div>
        )
    }
}

export default App;
