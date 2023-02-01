import React, { Component } from 'react'
import "./List.css";

 class List extends Component {
  render() {
    return (
      <div className='ListArea'>
        <input name = "filter" id='filter' placeholder= {"Filter by name or phone"} />
        <ul className='list'>
            <li>
              <span className='name'>Vepa Hocanazarov</span>
              <span className='phone'>0555 555 55 55</span>
              <span className='clearfix'></span>
            </li>

            <li>
              <span className='name'>Aygul Cakanova</span>
              <span className='phone'>0555 555 55 55</span>
              <span className='clearfix'></span>
            </li>

            <li>
              <span className='name'>Serdar Gurbanov</span>
              <span className='phone'>0555 555 55 55</span>
              <span className='clearfix'></span>
            </li>


           
        </ul>
      </div>
    )
  }
}

export default List;
