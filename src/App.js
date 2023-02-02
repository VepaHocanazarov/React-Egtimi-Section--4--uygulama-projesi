import React,{ Component }from "react"
import './App.css';
import Contacts from './Contacts';

class App extends Component {

  constructor(props){
    super(props);
    this.addContacts= this.addContact.bind(this);
  }

  state = {
    contacts:[{
      name:"Vepa",
      phone:"0555 555 55 55"
    },

    {
      name:"Aygul",
      phone:"0555 555 55 54"
    }
  ]
  };

  addContact(){

  }

  render()
    {
      return (
        <div className="App">
    
          <Contacts addContacts = {this.addContact} dizim = {this.state.contacts} />
    
        </div>
      );
    }
    }
  



export default App;


