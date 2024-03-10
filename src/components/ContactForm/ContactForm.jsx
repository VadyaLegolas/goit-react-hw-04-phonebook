import { Button, FormContact, Input, Label } from './ContactForm.styled';
import React, { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <FormContact autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </Label>

      <br />
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleChange}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </FormContact>
  );
};
