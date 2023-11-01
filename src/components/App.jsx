import { Component } from "react"
import { nanoid } from "nanoid"
export class App  extends Component  {
  state= {
    contacts: [],
    name: ''
  }

  handleInputName = (e) => {

    const {value} = e.currentTarget
 this.setState({name: value})

  }


  MakeContactsArray = (e) => {
  e.preventDefault();
const {name} = this.state
    this.setState(prevState =>({
      contacts: [...prevState.contacts, name]
    }))


      let contact = {
      name: name,
      id: nanoid(),
    }

    console.log(contact);
  }
  


  





  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
      <form onSubmit={this.MakeContactsArray}>
      <label> Name 
      <input
      onChange={this.handleInputName}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required

/>

<button type="submit"
>Add contact</button>
</label>
<ul >
{this.state.contacts.length > 0 && this.state.contacts.map(el =>(
  <li>{el}</li>
))}
</ul>
</form>
      </div>
    )}

};
