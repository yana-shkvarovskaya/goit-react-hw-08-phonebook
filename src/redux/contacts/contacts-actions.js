import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contacts/changeFilter');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);

export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);

export const deleteContactError = createAction('contacts/deleteContactError');

const actions = {
  changeFilter,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};

export default actions;
