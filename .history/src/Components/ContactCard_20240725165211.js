import React, { useState } from 'react';
import user from '../images/user.png';
import { Link } from "react-router-dom";
import ContactDetails from './ContactDetails';

const ContactCard = (props) => {
    const [show, setShow] = useState(false);

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
                            <td className='align-content-cent
