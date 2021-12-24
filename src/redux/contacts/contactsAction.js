import { createAction } from '@reduxjs/toolkit';
import { ADD, DEL, FILTER, ALL } from './contactsConstans';
export const addContact = createAction(ADD);
export const deleteContacts = createAction(DEL);
export const filterContact = createAction(FILTER);
export const allContacts = createAction(ALL);

// export const addContact = ({ name, number }) => ({
//   type: 'add/contact',
//   payload: {
//     id: v4(),
//     name,
//     number,
//   },
// });

// export const deleteContacts = contactId => ({
//   type: 'delete/contact',
//   payload: contactId,
// });

// export const filterContact = value => ({
//   type: 'filter/contact',
//   payload: value,
// });

// export const allContacts = contacts => ({
//   type: 'all/contact',
//   payload: contacts,
// });