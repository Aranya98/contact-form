import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteContact } from '../DataManagement/ContactSlice';


function ContactShowBox(props) {
  const {data: {name, phoneNumber}, id} = props
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  return (
    <>
      <div className = 'bg-white p-4'>
        <p>{name}</p>
        <p>{phoneNumber}</p>
        <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
          <button type="button" class="btn btn-primary me-3" onClick = {() => Navigate(`/EditContact/${id}`)}>Edit</button>
          <button type="button" class="btn btn-danger" onClick = {() => Dispatch(deleteContact(id))}>Delete</button>
        </div>
      </div>
      <hr className = 'm-0' />
    </>
  )
}

export default ContactShowBox
