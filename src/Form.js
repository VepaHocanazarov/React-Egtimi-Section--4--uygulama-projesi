import React, { Component } from 'react'

class Form extends Component {

  constructor(){
    super();
    this.onChange = this.onChange.bind(this);
  }

  state = {
    name:"",
    phone:""
  };

  onChange(e){

    this.setState({
     [e.target.name] : e.target.value,
     [e.target.phone] : e.target.value
    }
    )
  }

  render() {
    return (
      <div>

        <form>
          <input name='name' id='name' onChange={this.onChange} value={this.state.name} placeholder='Bir isim giriniz' />
          <br />
          <input name='phone' id='phone' onChange={this.onChange}  value={this.state.phone} placeholder='Bir isim giriniz' />
          <button>Ekle</button>
        </form>

      </div>
    )
  }
}

export default Form;
