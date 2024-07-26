import React from 'react';
import user from '../images/user.png';
import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ContactDetails = (props) => {

    const {contact, setContact, editcontact,seteditcontact} =props
    // console.log("props",contact);

    
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