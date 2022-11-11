import { useState } from 'react';
import { AppContainer } from './App.styled';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import useLocalStorage from 'Hooks/useLocalStorage';
import FormPhoneBook from 'components/FormPhoneBook';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    setContacts([...contacts, contact]);
  };

  const onFilterInput = value => {
    setFilter(value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = e => {
    const elemToRemove = e.currentTarget.parentNode.id;
    setContacts(contacts.filter(item => item.id !== elemToRemove));
  };

  return (
    <AppContainer>
    <div>
      <h1>
        Phonebook 
      </h1>
      <FormPhoneBook addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter onFilterInput={onFilterInput} />
      <ContactList
        contacts={contacts}
        filter={filter}
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      />
      {contacts.length === 0 && (
        <p >YOU HAVE NO CONTACTS YET</p>
      )}
    </div>
    </AppContainer>
  );
};

export default App;

