// First we create slice before creating store in redux & imformation is put in it.

import { createSlice } from "@reduxjs/toolkit";

const ContactSlice = createSlice ({   //createSlice by default takes object for creating slices for store
    name: 'contact', // If too many slice is there then it will identify the whole slice by name key.
    initialState: [
        {
            name: 'Shivam',
            phoneNumber: '1234567890'
        },
        {
            name: 'Aranya',
            phoneNumber: '1234567890'
        },
        {
            name: 'Jivesh',
            phoneNumber: '1234567890'
        }
    ],
    reducers: {                              // Reducers are used for changing the intialState values. It takes objects & here we can define any number of functions
        addCon (state, actions) {         // state consist of initialState object & action consist of reducer object
            state.push (actions.payload)
        },

        deleteContact (state, actions) {
            return state.filter((element,ind) =>  ind !== actions.payload)
        },

        updateContact (state, actions){
            state.splice(actions.payload.userIndex, 1, actions.payload.obj)
        }
    }
})

export const { addCon, deleteContact, updateContact } = ContactSlice.actions; // reducer object export
export default ContactSlice.reducer; // initialState object export