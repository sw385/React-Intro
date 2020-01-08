import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Decrement.css';


class Decrement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
            class: "black"
        };

        // this.decrement = this.decrement.bind(this);
    }
    
    decrement = () => {        
        if (this.state.count > 0) {
            if (this.state.count == 1) {
                this.setState({class: "red"});
            }
            this.setState({count: this.state.count - 1});
            // console.log(this.state.count);
        }
        else {
            alert('The counter cannot be less than zero!');
        };
    }
    
    render() {
        return (
            <div class="decrement">
                
                <p class={this.state.class}>{this.state.count}</p>

                <div class="button">
                    <button type="button" onClick={this.decrement}>Decrement</button>
                </div>

            </div>
        );
    }
};


Decrement.propTypes = {
    count: PropTypes.number.isRequired
};

export default Decrement;
