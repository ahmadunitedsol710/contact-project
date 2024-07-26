import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';



function ContactList({contact, setContact, local_storage_key}) {
    const deleteContactHandler = (id) => {
        const newContactList = contact.filter((contact) => {
            return contact.id !== id; //if contact id didn't match then return those id's and display on the screen
        });
    
        setContact(newContactList);  
        // Update the local storage with the new contact list
        localStorage.setItem(local_storage_key, JSON.stringify(newContactList));
    };
       
    useEffect(() => {
        const getContacts = JSON.parse(localStorage.getItem('contact'));
        if(getContacts && getContacts.length > 0) {
            setContact(getContacts);
        }
    },[]);

    return (
        <div className='contact_list'>
            <h1 className='h2 d-flex justify-content-between mb-lg-4'>
                Contact List
                <Link to="/add"><button className='btn btn-primary'>Add Contact</button></Link>
            </h1>

            <ContactCard contact={contact} setContact={setContact} l clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        </div>
    )
}


export default ContactList;