import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCon } from '../DataManagement/ContactSlice';
import { useNavigate } from 'react-router-dom';

function AddContact() {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const Dispatch = useDispatch(); // It is used for sending data to the store.
  const Navigate = useNavigate(); // It is used for navigate to another page.

  const addToContact = () => {
    const obj = {
      name: Name,
      phoneNumber: Phone
    }

    if ((obj.name !== '') && (obj.phoneNumber !== '')){
      Dispatch (addCon(obj));
      Navigate ("/")
      setName("");  // Reseting purpose
      setPhone(""); // Reseting purpose
    }

    else{
      alert ('Please enter your complete details !!!')
    }
  }

  return (
    <>
      <div className='container p-3 bg-light w-50'>
        <label className = 'mb-3'>Name:</label>
        <input type = "name" id="inputPassword5" class="form-control" value={Name} onChange = {(e) => setName (e.target.value)} />
        <label className = 'mb-3 mt-2'>Phone:</label>
        <input type="number" id="inputPassword5" class="form-control" value={Phone} onChange = {(e) => setPhone (e.target.value)} />
        <div style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button type="button" className = "btn btn-success mt-4" onClick = {() => addToContact ()}>Add To Contact</button>
        </div>
      </div>
    </>
  )
}

export default AddContact
