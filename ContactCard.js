import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactCard.css';

class ContactCard extends Component {

    constructor(props) {
        super();
    }
    
    render() {
        return (<div id="card">
            <p class="info"><strong>Name: </strong>{this.props.fullname}</p>
            <p class="info"><strong>Mobile number: </strong>{this.props.mobile}</p>
            <p class="info"><strong>Work number: </strong>{this.props.work}</p>
            <p class="info"><strong>Email: </strong>{this.props.email}</p>
            </div>);
    }
};

ContactCard.propTypes = {
    fullname:PropTypes.string.isRequired,
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
                <div class="card"><ContactCard fullname="Isaac Newton" mobile="(908) 630-7466" work="(613) 247-5041" email="isaac87@gmail.com" /></div>
                <div class="card"><ContactCard fullname="Olivia Newton-John" mobile="(408) 402-5606" email="olivia81@outlook.com" /></div>
                <div class="card"><ContactCard fullname="Juice Newton" mobile="(489) 508-9315" work="(914) 584-0188" email="juice81@protonmail.com" /></div>
            </div>
        );
    }
};

export default ContactList;
