import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import './App.css';

function App() {
  const local_storage_key = 'contact';
  const [contact, setContact] = useState([]);
  const [editContact, setEditContact] = useState(null);

  // Load contacts from local storage (if needed)
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(local_storage_key));
    if (storedContacts) setContact(storedContacts);
  }, []);

  // Save contacts to local storage
  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(contact));
  }, [contact]);

  return (
    <div className='container mt-lg-5 mb-lg-5'>
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact setContact={setContact} contact={contact} />} />
          <Route path="/" exact element={<ContactList contact={contact} setContact={setContact} setEditContact={setEditContact} />} />
          <Route path="/edit" exact element={<ContactDetails editContact={editContact} setEditContact={setEditContact} setContact={setContact} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
