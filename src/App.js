import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './AddContact/AddContact';
import axios from 'axios';
import ContactList from './ContactList/ContactList';
import Details from './Details/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditContact from './EditContact/EditContact';

const App = () => {
    const API = 'http://localhost:8000/contact';
    const [contact, setContact] = useState([]);
    const [oneContact, setOneContact] = useState(null);

    function addContact(newContact) {
        axios.post(API, newContact);
    }

    async function getContact() {
        let result = await axios.get(API);
        console.log(result);
        setContact(result.data);
    }

    async function deleteContact(id) {
        await axios.delete(`${API}/${id}`);
        getContact();
    }

    async function getOneContact(id) {
        let result = await axios.get(`${API}/${id}`);
        setOneContact(result.data);
    }
    async function newContact(id, editContact) {
        await axios.patch(`${API}/${id}`, editContact);
        getContact();
    }

    return (
        <div style={{ width: '400px', margin: '0 auto' }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <ContactList getContact={getContact} contact={contact} deleteContact={deleteContact} />
                        }
                    />
                    <Route path='/add' element={<AddContact addContact={addContact} />} />
                    <Route
                        path='/details/:id'
                        element={<Details getOneContact={getOneContact} oneContact={oneContact} />}
                    />
                    <Route
                        path='/edit/:id'
                        element={
                            <EditContact
                                getOneContact={getOneContact}
                                oneContact={oneContact}
                                newContact={newContact}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
