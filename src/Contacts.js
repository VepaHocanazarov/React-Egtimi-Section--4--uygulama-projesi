
import React, { Component } from 'react'
import List from './List';
import Form from './Form';
import PropTypes from "prop-types";

class Contacts extends Component {
  static propTypes = {
    dizim : PropTypes.array.isRequired,
    addContacts : PropTypes.func
  }
  render() {
    return (
      <div>

        <List dizimm = {this.props.dizim} />
        <Form addContacts = {this.props.addContacts}/>
        
      </div>
    )
  }
}

export default Contacts;