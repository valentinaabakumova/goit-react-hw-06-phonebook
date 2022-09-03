import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Form({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const marker = e.currentTarget.name;
    switch (marker) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert('hey, u! this name already in your contact list');
      return;
    }

    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <MyForm onSubmit={handleSubmit}>
      <Lable>
        name:
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </Lable>
      <Lable>
        number:
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </Lable>
      <Button type="submit" disabled={!name || !number}>
        add contact
      </Button>
    </MyForm>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const MyForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Lable = styled.label`
  display: flex;
  margin: 10px 0px;
`;

const Input = styled.input`
  margin-left: 10px;
`;

const Button = styled.button``;

export default Form;
