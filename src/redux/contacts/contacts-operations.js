import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../services/contactsFetch-api';

const getALLContacts = createAsyncThunk(
  'contacts/getALLContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await contactsApi.fetchContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (payload, { rejectWithValue }) => {
    try {
      return await contactsApi.fetchAddContact(payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await contactsApi.fetchDeleteContact(id);
      dispatch(deleteContact.fulfilled(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const contactsOperations = { getALLContacts, addContact, deleteContact };

export default contactsOperations;
