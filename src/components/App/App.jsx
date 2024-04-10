import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';


const getInitialContakts = () => {
   const savedKey = window.localStorage.getItem("key");
  if (savedKey !== null) {
    return JSON.parse(savedKey);
  }
  return (
     [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
     ]
  )
}

function App() {
  const [contacts, setContacts] = useState(getInitialContakts);
  const [inputValue, setInputValue] = useState('');
  
    
  const addContacts = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };
   
  const deleteContacts = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter(contact => contact.id !== contactId);
    });
  }
  
  const findContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    
    <>
      
      <h1 className={css.title}>Phonebook</h1>
      
      <ContactForm onAdd={addContacts} />
  

      <SearchBox value={inputValue} onChange={setInputValue} />

      <ContactList contacts={findContacts} onDelete={deleteContacts} />
</>  
  
  )
}

export default App
