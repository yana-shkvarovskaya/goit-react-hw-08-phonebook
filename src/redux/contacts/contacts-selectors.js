import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.users.contacts;
export const getFilter = state => state.users.filter;

export const getVisibleContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(text =>
      text.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
