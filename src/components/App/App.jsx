import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AppContainer } from './App.styled';
import FormPhoneBook from 'components/FormPhoneBook';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

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
    const { contacts } = this.state;
    const findContacts = this.findContacts();
    return (
      <AppContainer>
        <div>
          <h1>Phonebook</h1>
          <FormPhoneBook onSubmit={this.formSubmit} />
          <h2>Contacts</h2>
          {contacts.length > 0 ? (
            <Filter
              filter={this.state.filter}
              changeFilterInput={this.changeFilterInput}
            />
          ) : (
            <p >You have no contacts yet</p>
          )}
          {contacts.length > 0 && findContacts.length !== 0 && (
            <ContactList
              contacts={findContacts}
              deleteContact={this.deleteContact}
            />
          )}
        </div>
      </AppContainer>
    );
  }
}
export default App;
