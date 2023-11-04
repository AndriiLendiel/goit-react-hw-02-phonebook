import React, { Component } from "react";
import { Title } from "utils/utils";
import {FormWrapper, Form, FormButton, FormInput, FormLabel } from "./ContactForm.styled";
class ContactForm extends Component {
    state = {
    name: '',
    number: '',
    }
  handleInput = (e) => {
    const {value,name} = e.currentTarget;
 this.setState({[name]: value});
  }

  handleSubmit = (e) => {
const {name, number} = e.target.elements;
e.preventDefault();
this.props.addContact(name.value, number.value)

  }

    render() {
        const {name,number} = this.state;
        return (
          <FormWrapper>
                      <Title>PhoneBook</Title>
            <Form onSubmit={this.handleSubmit}>
            <FormLabel> Name 
            <FormInput
            onChange={this.handleInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
      />
</FormLabel>
      <FormLabel>Tel 
      <FormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={this.handleInput}
        value={number}
      />
      </FormLabel>
      <FormButton type="submit"
      >Add contact</FormButton>

      </Form>
          </FormWrapper>

        )
    }
}

export default ContactForm;