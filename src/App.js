import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactAddingForm from './components/ContactAddingForm/ContactAddingForm';
import ContactsBook from './components/ContactsBook/ContactsBook';
import ContactFilter from './components/ContactFilter/ContactFilter';
import ContactList from './components/ContactList/ContactList';

export default function App() {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleContactCart = (newContactCart) =>{   
    const doubleContact = findInContacts(newContactCart.name);  
    if (doubleContact) { 
      onDoubleAddingReaction(doubleContact);
      return
    }
    addNewContact(newContactCart);
  }
  
  const deleteContact = (contactId) => { 
    const newContactList = contacts.filter(
      ({id}) =>(id !== contactId)
      );
      setContacts( newContactList);
  }

  return (
      <>
        <h1>Phonebook</h1>  
        <ContactAddingForm onSubmit={handleContactCart} />

        
            <ContactsBook totalNumber={contacts.length}>
              <ContactFilter value={filter} setFilter={setFilter} />
              <ContactList contacts={getFilteredContacts()} deleteContact={deleteContact}/>
              {/* <ContactList contacts={filteredContacts} deleteContact={this.deleteContact}/> */}
            </ContactsBook>
        
        
        <ToastContainer />
      </>
    )


  function  addNewContact(newContactCart){
    const newContact = {id:uuidv4(),...newContactCart};
    setContacts(prev=>[newContact,...prev]);
  }
  function onDoubleAddingReaction(doubleContact) { 
    const { name } = doubleContact; 
    toast(name + ' is already in contacts.');
    // alert(name + ' is already in contacts.');
    setFilter(name);
  }  
  function findInContacts(newContactName) {
    return contacts.find(({ name }) => name === newContactName);
  };
  function getFilteredContacts(){
    return contacts.filter(
        ({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
  };
}