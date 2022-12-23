import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // For getting data from the store as it is considered as child component of App.js where provider is used. For sending data from child component to store useDispatch is used. useSelector by default takes function.
import ContactShowBox from './ContactShowBox';

function ContactContainer() {
    const contactList = useSelector((state) => state.contact)
    const [search, setSearch] = useState("");
    const Navigate = useNavigate();

    return (
        <>
            <div className='container p-3 bg-light w-50' style = {{position: "relative"}}>
                <form className = "mb-5">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value = {search} onChange = {(e) => setSearch(e.target.value)}/>
                    <button type="button" className = "btn btn-danger" style = {{borderRadius: "50%", position: "absolute", right: "20px", marginTop: "5px"}} onClick = {() => Navigate ('/AddContact')}>+</button>
                </form>
                {/* {contactDetails.map ((element, ind) => <ContactShowBox data = {element} id = {element.id} key = {ind}/>)} */}

                <div className = 'listContainer p-2' style = {{height: "32.5rem", overflowY: "scroll"}}>
                    {
                        (search !== "") ? contactList.filter ((element) => (new RegExp (search.toLowerCase ()).test (element.name.toLowerCase ()))).map ((element, ind) => <ContactShowBox data = {element} id = {ind} key = {ind}/>) : contactList.map ((element, ind) => <ContactShowBox data = {element} id = {ind} key = {ind}/>)
                    }

                    {/* OR */}

                    {/* {(search !== "") ? contactList.filter ((element) => (element.name.toLowerCase ().includes (search.toLowerCase ()))).map ((element, ind) => <ContactShowBox data = {element} id = {element.id} key = {ind}/>) : contactList.map ((element, ind) => <ContactShowBox data = {element} id = {element.id} key = {ind}/>)} */}
                </div>
            </div>
        </>
    )

}

export default ContactContainer
