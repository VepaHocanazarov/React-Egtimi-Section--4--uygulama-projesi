
import React, { Component } from 'react'
import List from './List';
import Form from './Form';
import PropTypes from "prop-types";

class Contacts extends Component {

  static propTypes = {
    dizim : PropTypes.array.isRequired,
    addContact : PropTypes.func
  }
  render() {
    return (
      <div>

        <List dizim = {this.props.dizim} />
        <Form addContact = {this.props.addContact}/>
        
      </div>
    )
  }
}

export default Contacts;