import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div>

        <form>
          <input name='name' id='name' placeholder='Bir isim giriniz' />
          <br />
          <input name='name' id='name' placeholder='Bir isim giriniz' />
          <button>Ekle</button>
        </form>

      </div>
    )
  }
}

export default Form;
