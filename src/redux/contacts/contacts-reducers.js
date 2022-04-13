import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import contactsOperations from './contacts-operations';

const { getALLContacts, addContact, deleteContact } = contactsOperations;

const contacts = createReducer([], {
  [getALLContacts.fulfilled]: (_state, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_state, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
