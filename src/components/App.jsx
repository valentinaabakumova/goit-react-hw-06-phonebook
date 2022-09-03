// import React, { Component } from 'react';
import { useState, useEffect, memo } from 'react';
import useLocalStorage from 'hooks/localStorage';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = window.localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, [setContacts]);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const person = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([...contacts, person]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Wrapp>
      <Title>phonebook:</Title>
      <Form onSubmit={addContact} contacts={contacts} />
      <Title>contacts:</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Wrapp>
  );
}

const Wrapp = styled.div`
  width: 600px;
  margin: 50px 50px;
  padding: 15px;
  border: 1px solid black;
`;

const Title = styled.h3``;

export default memo(App);
