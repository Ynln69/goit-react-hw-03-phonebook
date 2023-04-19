import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import React, { Component } from 'react';
import { MainBox } from './App.styled';
import Section from 'components/Section/Section';
import Form from 'components/PhoneForm/PhoneForm';
import initialContact from '../data/contact.json';
import FilterContacts from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: initialContact,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const pasredContacts = JSON.parse(contacts);

    if (pasredContacts) {
      this.setState({ contacts: pasredContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = value => {
    for (const contact of this.state.contacts) {
      if (value.name === contact.name) {
        return alert(`${value.name} is already in contact`);
      } else if (value.number === contact.number) {
        return alert(`${value.name} is already in contact`);
      }
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...value }, ...prevState.contacts],
    }));
    Notiflix.Notify.success(
      'You have added a new contact to your contact list'
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFind = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <MainBox>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <FilterContacts onChangeFind={this.onChangeFind} value={filter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </MainBox>
    );
  }
}

export default App;
