import React, { useState, useEffect } from "react";
import Axios from "axios";

function PhonebookApp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phonebook, setphonebook] = useState([]);
  const [newPhone, setNewPhone] = useState(0);
  const [newName, setNewName] = useState(0);

  const addNewNumber = () => {
    Axios.post("http://localhost:8080/add-phone", { name, phone });
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/get-phone").then((res) => {
      setphonebook(res.data.data.phoneNumbers);
    });
  });

  const updatePhone = (id) =>{
    Axios.put('http://localhost:8080/update-phone',{id, newPhone})
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
      <button className="add-btn" onClick={addNewNumber}>
        Add New Number
      </button>

      <>
        {phonebook.map((value, key) => (
          <div key={key} className="phone">
            <h1>{value.name}</h1>
            <h1>{value.phone}</h1>

            {/* <input type="text" placeholder='update Name...' onChange={(e) => {
              setNewName(e.target.value)
            }}/> */}
                <input
                    type="number"
                    placeholder="update Phone..."
                    onChange={(e) => {
                        setNewPhone(e.target.value);
                    }}
            />
            <button
              className="update-btn"
              onClick={() => {
                updatePhone(value._id);
              }}
            >
              Update
            </button>
          </div>
        ))}
      </>
    </div>
  );
}

export default PhonebookApp;
