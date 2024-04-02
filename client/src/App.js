import React, { useState, useEffect } from 'react';
import Axios from 'axios'


function PhonebookApp() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [phonebook, setphonebook] = useState([]);

    const addNewNumber = () => {
        Axios.post('http://localhost:8080/add-phone',{name, phone})
    }

    useEffect(() => {
        Axios.get('http://localhost:8080/get-phone').then(res=> {
            setphonebook(res.data.data.phoneNumbers)
        })
    })
    

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (name.trim() === '' || phone.trim() === '') {
    //         return;
    //     }
    //     setContacts([...contacts, { name, phone }]);
    //     setName('');
    //     setPhone('');
    // };

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
                 <button onClick={addNewNumber}>Add New Number</button>
        
            <ul>
                {phonebook.map((value, key) => (
                    <li key={key}>{value.name}: {value.phone}</li>
                ))}
            </ul>
        </div>
    );
}

export default PhonebookApp;
