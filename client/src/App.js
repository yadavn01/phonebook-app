import React, { useState, useEffect } from 'react';
import Axios from 'axios'


function PhonebookApp() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [phonebook, setphonebook] = useState([]);
    const [newPhone, setNewPhone] = useState('');

    const addNewNumber = () => {
        Axios.post('http://localhost:8080/add-phone',{name, phone})
    }

    useEffect(() => {
        Axios.get('http://localhost:8080/get-phone').then(res=> {
            setphonebook(res.data.data.phoneNumbers)
        })
    })

    const updatePhone = (id) => {
        Axios.put('http://localhost:8080/udpate-phone', {id, newPhone})
        .then(response => {
            // Handle success response if needed
            console.log(response.data);
        }) 
        .catch(error => {
            // Handle error response if needed
            console.error(error);
        });
    }

    return (
        <div className="container">
            <h1>Phonebook app</h1>
           
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <label htmlFor="phone">Phone:</label>
                <input 
                    type="number" 
                    id="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
            />
            <button className="add-btn" onClick={addNewNumber}>Add New Number</button>

            <>
            {phonebook.map((value, key) => (
                <React.Fragment key={key}>
                <ul className='phone'>
                    <li>{value.name}: {value.phone}</li>
                </ul>
                <input type="number" placeholder='update Phone...' onChange={(e) => {
              setNewPhone(e.target.value)
            }}/>
                <button className="update-btn" onClick={() => {updatePhone(value._id)}}>Update</button>
                </React.Fragment>
            ))}
            </>
        </div>
    );
}

export default PhonebookApp;
