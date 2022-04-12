import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getFilteredContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

import styles from './ContactsList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length === 0 ? (
        <div> No contacts </div>
      ) : (
        <ul className={styles.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              {name}: {number}
              <button
                className={styles.button}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};
