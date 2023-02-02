import React, { Component } from 'react'
import "./List.css";
import  PropTypes from 'prop-types';

class List extends Component {

  static propTypes={
    dizim:PropTypes.array.isRequired
  }
  render() {
    return (
      <div className='ListArea'>
        <input name="filter" id='filter' placeholder={"Filter by name or phone"} />
        <ul className='list'>

          {
            this.props.dizim.map(diziler =>

              <li key = {diziler.name} >
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
