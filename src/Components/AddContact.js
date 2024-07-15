import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

const AddContact = ({ contact, setContact, local_storage_key }) => {
    const navigate = useNavigate();
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postal, setPostal] = useState("");
    const [number, setNumber] = useState("");


  // Get contacts from Add Contact component "contacts"
  const addContactHandler = (contacts) => {
    console.log([...contact, { id: uuidv4(), ...contacts }])
    setContact([...contact, { id: uuidv4(), ...contacts }]);
  };


  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(contact));
  },[contact]);


    const add = (e) => {
        e.preventDefault();
        if (fname === "" || lname === "" || email === "" || country === "" || number === "" || province === "") {
            alert("All fields are required");
            return;
        }
        addContactHandler({ fname, lname, email, country, city, province, postal, number });
        setfName("");
        setlName("");
        setEmail("");
        setCountry("");
        setCity("");
        setProvince("");
        setPostal("");
        setNumber("");


        navigate("/");
    };

    return (
        <div className='ui container main'>
            <h1>Add Contact Details</h1>
            <form onSubmit={add}>
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
                            value={lname}  
                            onChange={(e) => setlName(e.target.value)}
                        />
                    </div>
                </div>

                <div className='col-sm-12'>
                    <label className='form-label'>Email</label>
                    <input className='form-control' 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="col-sm-12">
                        <label className='form-label'>Country</label>
                        <select className="form-select" value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="afghanistan">Afghanistan</option>
                            <option value="armenia">Armenia</option>
                            <option value="azerbaijan">Azerbaijan</option>
                            <option value="bahrain">Bahrain</option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="bhutan">Bhutan</option>
                            <option value="brunei">Brunei</option>
                            <option value="cambodia">Cambodia</option>
                            <option value="china">China</option>
                            <option value="cyprus">Cyprus</option>
                            <option value="georgia">Georgia</option>
                            <option value="india">India</option>
                            <option value="indonesia">Indonesia</option>
                            <option value="iran">Iran</option>
                            <option value="iraq">Iraq</option>
                            <option value="israel">Israel</option>
                            <option value="japan">Japan</option>
                            <option value="jordan">Jordan</option>
                            <option value="kazakhstan">Kazakhstan</option>
                            <option value="kuwait">Kuwait</option>
                            <option value="kyrgyzstan">Kyrgyzstan</option>
                            <option value="laos">Laos</option>
                            <option value="lebanon">Lebanon</option>
                            <option value="malaysia">Malaysia</option>
                            <option value="maldives">Maldives</option>
                            <option value="mongolia">Mongolia</option>
                            <option value="myanmar">Myanmar</option>
                            <option value="nepal">Nepal</option>
                            <option value="north-korea">North Korea</option>
                            <option value="oman">Oman</option>
                            <option value="pakistan">Pakistan</option>
                            <option value="palestine">Palestine</option>
                            <option value="philippines">Philippines</option>
                            <option value="qatar">Qatar</option>
                            <option value="saudi-arabia">Saudi Arabia</option>
                            <option value="singapore">Singapore</option>
                            <option value="south-korea">South Korea</option>
                            <option value="sri-lanka">Sri Lanka</option>
                            <option value="syria">Syria</option>
                            <option value="taiwan">Taiwan</option>
                            <option value="tajikistan">Tajikistan</option>
                            <option value="thailand">Thailand</option>
                            <option value="timor-leste">Timor-Leste</option>
                            <option value="turkey">Turkey</option>
                            <option value="turkmenistan">Turkmenistan</option>
                            <option value="united-arab-emirates">United Arab Emirates</option>
                            <option value="uzbekistan">Uzbekistan</option>
                            <option value="vietnam">Vietnam</option>
                            <option value="yemen">Yemen</option>
                        </select>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <label className='form-label'>City</label>
                        <input className='form-control' 
                            type="text" 
                            name="city" 
                            placeholder="City" 
                            value={city}  
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-6">
                        <label className='form-label'>Province</label>
                        <select className="form-select" value={province} onChange={(e) => setProvince(e.target.value)}>
                            <option value="">Province</option>
                            <option value="PU" >Punjab</option>
                            <option value="KPK">KPK</option>
                            <option value="SI">Sindh</option>
                            <option value="BAL">Balochisan</option>
                            <option value="GIL">Gilgit</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <label className='form-label'>Postal Code</label>
                        <input className='form-control' 
                            type="text" 
                            name="postal" 
                            placeholder="Postal Code" 
                            value={postal}  
                            onChange={(e) => setPostal(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-6">
                        <label className='form-label'>Mob No</label>
                        <input className='form-control' 
                            type="tel" 
                            name="number" 
                            placeholder="Mob No" 
                            value={number}  
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mt-lg-5 d-flex gap-lg-1">
                    <button className='btn btn-primary'>Submit</button>
                    <Link to="/"><button className='btn btn-secondary'>Contact List</button></Link>
                </div>
            </form>
        </div>
    );
}



export default AddContact;