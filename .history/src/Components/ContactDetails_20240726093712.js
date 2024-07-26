import React, { useState, useEffect } from 'react';
import user from '../images/user.png';
import { Link, useParams, useNavigate } from "react-router-dom";


function ContactDetails({ contact, updateContactHandler }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const contactToEdit = contacts.find(contact => contact.id === id);
  
    const [fname, setfName] = useState(contactToEdit?.fname || "");
  
    useEffect(() => {
      if (!contactToEdit) {
        alert("Contact not found");
        navigate('/');
      }
    }, [contactToEdit, navigate]);
  
    const update = (e) => {
      e.preventDefault();
      if (!fname || !lname || !email || !country || !number || !province) {
        alert("All fields are required");
        return;
      }
  
      updateContactHandler({
        id,
        fname,
        lname,
        email,
        country,
        city,
        province,
        postal,
        number
      });
  
      navigate('/');
    };
    
    return (
        <div className="container main">
            <form>
                <div className="row">
                    <div className='col-sm-6'>
                        <label className='form-label'>First Name</label>
                        <input
                            className='form-control' 
                            type="text" 
                            name="fname" 
                            placeholder="First Name"
                            value={contact.fname }
                        />
                    </div>
                    <div className='col-sm-6'>
                        <label className='form-label'>Last Name</label>
                        <input className='form-control' 
                            type="text" 
                            name="lname" 
                            placeholder="Last Name" 
                            value="Kamal"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactDetails;