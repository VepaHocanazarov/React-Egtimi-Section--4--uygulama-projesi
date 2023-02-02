import React, { Component } from 'react'
import "./List.css";
import PropTypes from 'prop-types';

class List extends Component {

  static propTypes = {
    dizim: PropTypes.array.isRequired
  };

  state = {
    filtertext: ""
  }

  onChangeFilterText = (e) => {

    this.setState({
      filtertext: e.target.value
    });
  };

  render() {

    const filteredContacts = this.props.dizim.filter(
      contact => {
        return contact.name.toLowerCase().indexOf(
        this.state.filtertext.toLocaleLowerCase()
        ) !== -1
      }
    )

    return (
      <div className='ListArea'>
        <input value={this.state.filtertext} onChange={this.onChangeFilterText} name="filter" id='filter' placeholder={"Filter by name or phone"} />
        <ul className='list'>

          {
            filteredContacts.map(diziler =>

              <li key={diziler.name} >
                <span className='name'>{diziler.name}</span>
                <span className='phone'>{diziler.phone}</span>
                <span className='clearfix'></span>
              </li>
            )
          }

        </ul>
      </div>
    )
  }
}

// List.propTypes = {
//   dizimm:PropTypes.array.isRequired
// }

export default List;
