import React, { useState } from 'react';
import user from '../images/user.png';
import { Link } from "react-router-dom";
import ContactDetails from './ContactDetails';

const ContactCard = (props) => {
         const [editcontact,] =props

    const clickHandler = (item) => {
        setShow(true);
        console.log("id", item);
    };

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Province</th>
                        <th>Postal Code</th>
                        <th>Mobile No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contact && props.contact.map((item) => (
                        <tr key={item.id}>
                            <td className='align-content-center' data-label="Image">
                                <img className='img-thumbnail image' src={user} alt='user' />
                            </td>
                            <td className='align-content-center' data-label="First Name">{item.fname}</td>
                            <td className='align-content-center' data-label="Last Name">{item.lname}</td>
                            <td className='align-content-center' data-label="Email">{item.email}</td>
                            <td className='align-content-center' data-label="Country">{item.country}</td>
                            <td className='align-content-center' data-label="City">{item.city}</td>
                            <td className='align-content-center' data-label="Province">{item.province}</td>
                            <td className='align-content-center' data-label="Postal Code">{item.postal}</td>
                            <td className='align-content-center' data-label="Mobile No.">{item.number}</td>
                            <td className='align-content-center' data-label="Action">
                                <i className="bi bi-trash3" style={{ color: "red", marginTop: "7px" }} onClick={() => props.clickHandler(item.id)}></i>
                                <Link to="/edit">
                                    <i className="bi bi-pencil-square" style={{ color: "green", marginTop: "7px", marginLeft: "7px" }} onClick={() => clickHandler(item)}></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {show && <ContactDetails />}
        </>
    )
}

export default ContactCard;
