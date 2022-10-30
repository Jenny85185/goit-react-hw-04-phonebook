import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AppContainer }  from './App.styled';
import  PhoneBook  from 'components/PhoneBook';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

 class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
 
  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert(`${name} is already in contact`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilterInput = e => {
    this.setState({ filter: e.target.value });
  };

  findContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <AppContainer>
        <div>
          <h1>Phonebook</h1>
          <PhoneBook onSubmit={this.formSubmit} />
          <h2>Contacts</h2>
          <Filter
            filter={this.state.filter}
            changeFilterInput={this.changeFilterInput}
          />
          <ContactList
            contacts={this.findContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
      </AppContainer>
    );
  }
}
export default App;