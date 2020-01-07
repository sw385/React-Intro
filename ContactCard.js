import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactCard.css';

class ContactCard extends Component {

    constructor(props) {
        super();
    }
    
    render() {
        return <div id="card"><h3>Name: {this.props.firstname}</h3><h3>Mobile number: {this.props.mobile}</h3>Work number: {this.props.work}<h3>Email: {this.props.email}</h3></div>
    }
};

ContactCard.propTypes = {
    firstname:PropTypes.string.isRequired,
    mobile:PropTypes.string.isRequired,
    work:PropTypes.string,
    email:PropTypes.string.isRequired
};

class ContactList extends Component {

    constructor(props) {
        super();
    }
    
    render() {
        return (
            <div>
                <div class="card"><ContactCard firstname="Bobert" mobile="(123) 456-7890" work="(098) 765-4321" email="bobert@bob.com" /></div>
                <div class="card"><ContactCard firstname="Juice" mobile="(123) 456-7890" email="juice@bob.com" /></div>
                <div class="card"><ContactCard firstname="Shirley" mobile="(123) 456-7890" work="(098) 765-4321" email="shirley@bob.com" /></div>
            </div>
        );
    }
};

export default ContactList;
