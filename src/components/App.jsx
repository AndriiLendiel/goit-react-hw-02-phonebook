import { Component } from "react"
import { nanoid } from "nanoid"
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
export class App  extends Component  {
  state= {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }



addContact = (name,number) => {
  let contactData = {
    name,
    number,
    id: nanoid()
      }
  this.setState(prevState =>({
    contacts: [...prevState.contacts, contactData]
    
  }))
}

createFilter = (e) => {
  const {value, name} = e.currentTarget;
console.log(value, name);
this.setState({
  filter: value,
})
}

filterByName = () => {
const normalized = this.state.filter.toLowerCase()
return this.state.contacts.filter(el => el.name.toLowerCase().includes(normalized))
}




  render() {
const filteredContacts = this.filterByName()
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
<ContactForm 

addContact={this.addContact}
/>
<Filter 
value={this.state.filter}
onChange={this.createFilter}
/>

<ContactList contacts={filteredContacts}



/>
<button type="button"

>PUT</button>
      </div>
    )}

};
