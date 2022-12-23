import React from 'react';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import ContactContainer from './Components/ContactContainer';
import ContactStore from './DataManagement/ContactStore';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store = { ContactStore }> {/* For getting data from store & sending data to the store we are using providers. It consist of store attribute & in this attribute we are putting store component to connect store to providers. */}
          <Header />
          <Routes>
            <Route path = '/' element = {<ContactContainer />} />
            <Route path = '/AddContact' element = {<AddContact />} />
            <Route path = '/EditContact/:bc' element = {<EditContact />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}
// Note: In redux Providers are used to get & send data from / to store that is being created & it is applicable for parent file. Before parent file ie for setting up store reduxjs toolkit is used & for child components react-redux is used.

export default App;
