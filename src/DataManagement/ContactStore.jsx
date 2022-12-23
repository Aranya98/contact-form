import { configureStore } from "@reduxjs/toolkit"; // configureStore by default takes an object.
import ContactInfo from "./ContactSlice"

const ContactStore = configureStore ({
    reducer: {
        contact: ContactInfo       // Bringing up the information to the store which was defined in slice. 
    }
})

export default ContactStore;