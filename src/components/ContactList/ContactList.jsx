import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <Name>
            {name}: {number}
          </Name>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

const List = styled.li`
  list-stale: none;
`;

const ListItem = styled.li`
  width: 300px;
  margin-right: 10px;
  display: flex;
  list-stale: none;
  justify-content: space-between;
`;

const Name = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
  height: 20px;
`;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
