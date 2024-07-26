import React from 'react';
import user from '../images/user.png';
import {Link} from "react-router-dom";

const ContactDetails = (props) => {

    const {contact, setContact, editcontact,seteditcontact} =props
    console.log("props",editcontact);

    
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
                            value={editcontact.fname }
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

                <div className='col-sm-12'>
                    <label className='form-label'>Email</label>
                    <input className='form-control' 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value="ahmadkamal710@gmail.com"
                    />
                </div>
            </form>
        </div>
    );
};

export default ContactDetails;