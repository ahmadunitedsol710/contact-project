import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import './App.css';

function App() {
  const local_storage_key = 'contact';
  const [contact, setContact] = useState([]);

  const updateContactHandler = (updatedContact) => {
    console.log

    const updatedContactList = contact.map((contact) => 
      contact.id === updatedContact.id ? updatedContact : contact
    )

    setContact(updatedContactList);
    localStorage.setItem(local_storage_key, JSON.stringify(updatedContactList));
 
    console.log("After Contact",contact)
    console.log("After Updated Contact",updatedContactList)
    console.log("After Local Storage",localStorage.contact)
  };

  
  // useEffect(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem(local_storage_key));
  //   if (storedContacts && storedContacts.length > 0) {
  //     setContact(storedContacts);
  //     console.log("Loaded contacts from localStorage:", storedContacts);
  //   }
  // }, []);

  
  return (
    <div className='container mt-lg-5 mb-lg-5'>
    <Router>
      <Header />
      <Routes>
          <Route path="/add" element={<AddContact setContact={setContact} contact={contact} local_storage_key={local_storage_key} />}/>
        
          <Route path="/" exact element={<ContactList contact={contact} setContact={setContact} local_storage_key={local_storage_key}/>}/> 

          <Route path="/edit/:id" exact element={<ContactDetails contact={contact} updateContactHandler={updateContactHandler}  local_storage_key={local_storage_key}/>}/>         
      </Routes>
    </Router>
    </div>
  );
}

export default App;