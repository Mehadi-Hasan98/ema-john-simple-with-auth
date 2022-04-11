import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }


    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneNumberBlur = event =>{
        setPhoneNumber(event.target.value);
    }


    const handleCreateUser = event => {
        event.preventDefault();

    }


    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Shipping Information</h2>
           <form onSubmit={handleCreateUser}>
           <div className="input-group">
                <label htmlFor="name">Your Name</label>
                <input onBlur={handleNameBlur}  type="text" name="name" id="" required/>
            </div>
           <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input onBlur={handleEmailBlur}  type="email" name="email" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Address</label>
                <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">Phone Number</label>
                <input onBlur={handlePhoneNumberBlur} type="text" name="phone-number" id="" required/>
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <input className='form-submit' type="submit" value="Add Shipping" />
           </form>
        </div>
    </div>
    );
};

export default Shipment;