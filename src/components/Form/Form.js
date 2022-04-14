import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { getContacts } from 'redux/contacts/contacts-selectors';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import s from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = (name, number) => {
    dispatch(contactsOperations.addContact(name, number));
  };

  const handleNameChange = ({ currentTarget: { value } }) => {
    setName(value);
  };

  const handleNumberChange = ({ currentTarget: { value } }) => {
    setNumber(value);
  };

  const handleAddContact = e => {
    e.preventDefault();

    const isRepeatContact = contacts.find(contact => contact.name === name);

    if (isRepeatContact) {
      alert(`${name} is already in contacts.`);
      resetState();
      return;
    }

    onSubmit({ name, number });
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleAddContact}>
        <TextField
          style={{
            width: '300px',
            padding: '8px',
            marginTop: '10px',
            marginBottom: '10px',
            borderRadius: 8,
          }}
          required
          id="outlined-name"
          label="Name"
          color="primary"
          fullwidth="true"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          style={{
            width: '300px',
            padding: '8px',
            marginTop: '10px',
            marginBottom: '10px',
            borderRadius: 8,
          }}
          required
          id="outlined-name"
          label="Phone"
          color="primary"
          fullwidth="true"
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          helperText="Phone number 0XX XXX XX XX"
        />
        <LoadingButton
          style={{
            width: '300px',
            marginTop: '20px',
            marginBottom: '10px',
            borderRadius: 8,
          }}
          color="primary"
          onClick={handleAddContact}
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save contact
        </LoadingButton>
      </form>
    </div>
  );
}
