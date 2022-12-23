import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateContact } from '../DataManagement/ContactSlice';


function EditContact() {
    const Dispatch = useDispatch ()
    const Navigate = useNavigate(); // It is used for navigate to another page.
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [userIndex, setUserIndex] = useState('');
    const contactList = useSelector((state) => state.contact);
    useEffect (() => {
        const index = window.location.pathname.split('/')[2]; // ["localhost:3000", "EditContact", "1"]
        const obj = contactList[index];
        setUserIndex(index)
        setName(obj.name);
        setPhone(obj.phoneNumber);
    }, [])
    
    const submitContact = () => {
        let obj = {
            name: Name,
            phoneNumber: Phone
        }
        Navigate ("/")
        Dispatch (updateContact({userIndex, obj}))
    }

    
    return (
        <>
            <div className='container p-3 bg-light w-50'>
                <h2 className = 'text-center'>Edit Contact</h2>
                <label className='mb-3'>Name:</label>
                <input type="name" id="inputPassword5" class="form-control" value={Name} onChange={(e) => setName(e.target.value)} />
                <label className='mb-3 mt-2'>Phone:</label>
                <input type="number" id="inputPassword5" class="form-control" value={Phone} onChange={(e) => setPhone(e.target.value)} />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button type="button" className="btn btn-success mt-4" onClick={() => submitContact ()}>Update Now</button>
                </div>
            </div>
        </>
    )
}

export default EditContact
