import {useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { allContacts, filterContact, deleteContacts, addContact } from './redux/contacts/contactsAction';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state=> state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts && dispatch(allContacts(contacts));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.id !== contactId),
    // );
    return dispatch(deleteContacts(contactId));
  };

  const formSubmitHandler = ({ name, number }) => {
    // setContacts(prevState => [...prevState, { id: v4(), name, number }]);
    return dispatch(addContact({name, number}))
  };

  const changeFilter = e => {
    return dispatch(filterContact(e.target.value))
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmit={formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
            contacts={visibleContacts()}
            onChange={changeFilter}
            onDeletContact={deleteContact}
        />
      </div>
  );
};

export default App;