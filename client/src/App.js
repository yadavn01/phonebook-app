import React, { useState, useEffect } from "react";
import Axios from "axios";

function PhonebookApp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phonebook, setphonebook] = useState([]);
  const [newPhone, setNewPhone] = useState(0);
 // const [newName, setNewName] = useState(0);

  const addNewNumber = () => {
    Axios.post("http://localhost:8080/add-phone", { name, phone });
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/get-phone").then((res) => {
      setphonebook(res.data.data.phoneNumbers);
    });
  });

  

  const updatePhone = async (id) =>{
    try {
      const response = await Axios.put(`http://localhost:8080/update-phone`, { id, newPhone });
      // Handle success response if needed
      console.log(response.data);
  } catch (error) {
      // Handle error response if needed
      console.log(error);
  }
}

const deletePhone = (id) => {
  Axios.delete(`http://localhost:8080/delete-phone/${id}`)
  .then(response => {
    console.log(response.body);
  })
  .catch(error => {
    console.log(error);
  })

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
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button className="add-btn" onClick={addNewNumber}>
        Add New Number
      </button>

    
      {
        phonebook.map((val,key) => {
          return <div key={key} className="phone" >
            <h1>{val.name}</h1>
            <h1>{val.phone}</h1>
            <input type="text" placeholder='update Phone...' onChange={(e) => {
              setNewPhone(e.target.value)
            }}/>
            {/* <button className="update-btn" onClick={() => {updatePhone(val._id)}}>Update</button> */}
            <button className="delete-btn" onClick={() => {deletePhone(val._id)}}>Delete</button>
          </div>
        })
      }
      
    </div>
  );
}

export default PhonebookApp;
