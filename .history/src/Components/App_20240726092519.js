import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import './App.css';

function App() {
  const local_storage_key = 'contact';
  const [contact, setContact] = useState([]);
  const [editcontact, seteditcontact] = useState([]);

  return (
    <div className='container mt-lg-5 mb-lg-5'>
    <Router>
      <Header />
      <Routes>
          <Route path="/add" element={<AddContact setContact={setContact} contact={contact} local_storage_key={local_storage_key} />}/>
        
          <Route path="/" exact element={<ContactList contact={contact} setContact={setContact} seteditcontact={seteditcontact} editcontact={editcontact} local_storage_key={local_storage_key}/>}/> 

          <Route path="/edit/:id" exact element={<ContactDetails contact={contact} seteditcontact={seteditcontact} editcontact={editcontact}  setContact={setContact} local_storage_key={local_storage_key}/>}/>         
      </Routes>
    </Router>
    </div>
  );
}

export default App;