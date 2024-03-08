import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      setContacts(localStorageContacts);
    }
    console.log('mount');
  }, []);

  
  useEffect(() => {
    if (isFirstRender.current) {
      console.log(isFirstRender);
      isFirstRender.current = false;
      return;
    }
    console.log(contacts);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) {
  //     this.setState({ contacts });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  const addContact = data => {
    const contact = { id: nanoid(), ...data };
    const normalizeName = contact.name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizeName)) {
      toast.error(`${contact.name} is already in contacts`, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    }

    setContacts(prevContact => [contact, ...prevContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContact =>
      prevContact.filter(({ id }) => id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
      <ToastContainer />
    </>
  );
}
