import axios from 'axios';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function fetchAddContact(payload) {
  const { data } = await axios.post('/contacts', payload);
  return data;
}

export async function fetchDeleteContact(value) {
  const { data } = await axios.delete(`/contacts/${value}`);
  return data;
}
