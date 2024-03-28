import React, { useState } from 'react';
import Axios from 'axios'


function PhonebookApp() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [contacts, setContacts] = useState([]);

    const addNewNumber = () => {
        Axios.post('http://localhost:8080/add-phone',{name, phone})
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() === '' || phone.trim() === '') {
            return;
        }
        setContacts([...contacts, { name, phone }]);
        setName('');
        setPhone('');
    };

    return (
        <div className="container">
            <h1>Phonebook app</h1>
            <form onSubmit={handleSubmit}>
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
                    type="tel" 
                    id="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    required 
                />
                <input type="submit" value="Add Contact" />
            </form>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>{contact.name}: {contact.phone}</li>
                ))}
            </ul>
        </div>
    );
}

export default PhonebookApp;
