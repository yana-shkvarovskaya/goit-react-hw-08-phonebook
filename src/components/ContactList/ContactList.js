import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import s from './ContactList.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0, 1),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
}));

export default function ContactList() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => dispatch(contactsOperations.getALLContacts()), [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.listItem} key={id}>
          <p className={s.listItemText}>
            {name}: <span className={s.listItemText}>{number}</span>
          </p>

          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            className={styles.root}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
