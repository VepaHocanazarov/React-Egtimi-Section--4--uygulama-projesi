import React,{ Component }from "react"
import './App.css';
import Contacts from './Contacts';

class App extends Component {

  constructor(props){
    super(props);
    this.addContact= this.addContact.bind(this);
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

  addContact(içerik){

    console.log(içerik);

    const{contacts}=this.state;
    contacts.push(içerik);

    this.setState(
      {
        contacts:contacts
      }
    )

  }

  render()
    {
      return (
        <div className="App">
    
          <Contacts addContact = {this.addContact} dizim = {this.state.contacts} />
    
        </div>
      );
    }
    }
  



export default App;


