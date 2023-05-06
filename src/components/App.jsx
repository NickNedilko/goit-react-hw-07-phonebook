import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return alert(`${name} is already in contacts`);
    }
    const id = nanoid();
    const contact = { name, id, number };
    setContacts([contact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const filterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filterContacts = filterContact();

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2 className={css.title}>Contacts</h2>
      <Filter onFilter={changeFilter} value={filter} />
      <Contacts contacts={filterContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
