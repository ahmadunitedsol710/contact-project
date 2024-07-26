import React from 'react';
import user from '../images/user.png';
import {Link} from "react-router-dom";

const ContactDetails = (props) => {
    console.log("props",pro);
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
                            value="Ahmad"
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