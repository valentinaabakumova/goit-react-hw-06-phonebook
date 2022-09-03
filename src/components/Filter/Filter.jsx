import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Filter = ({ value, onChange }) => {
  return (
    <Lable>
      find by name:
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Lable>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const Lable = styled.label`
  display: flex;
  margin: 10px 0px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  margin-left: 10px;
`;

export default Filter;
