import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";


function ContactDetails({ contact, updateContactHandler }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const contactToEdit = contact.find(contact => contact.id === id);
  
    const [fname, setfName] = useState(contactToEdit?.fname || "");

    const [formData, setFormData] = useState({ email: '', password: '' });

  function changeField(e){
    let name = e.target.name;
    let value = e.target.value;
    let formObject = { ...formData };
    setFormData({ ...formObject, [name]: value });
  }
  
    useEffect(() => {
      if (!contactToEdit) {
        alert("Contact not found");
        navigate('/');
      }
    }, [contactToEdit, navigate]);
  
    const update = (e) => {
      e.preventDefault();
      if (!fname ) {
        alert("All fields are required");
        return;
      }
  
      updateContactHandler({
        id,
        fname
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
                            value={fname}
                            onChange={(e) => setfName(e.target.value)}
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