import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditContact = ({ getOneContact, oneContact, newContact }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const params = useParams();

    useEffect(() => {
        getOneContact(params.id);
    }, []);

    useEffect(() => {
        if (oneContact) {
            setName(oneContact.name);
            setLastName(oneContact.lastName);
            setEmail(oneContact.email);
        }
    }, [oneContact]);
    console.log(oneContact);
    function handleValues() {
        let editContact = {
            name,
            lastName,
            email,
        };
        newContact(params.id, editContact);
    }
    if (!oneContact) {
        return <h1>loading...</h1>;
    }
    return (
        <div>
            <input onChange={e => setName(e.target.value)} value={name} />
            <input onChange={e => setLastName(e.target.value)} value={lastName} />
            <input onChange={e => setEmail(e.target.value)} value={email} />
            <Link to='/'>
                <button onClick={() => handleValues()}>Save</button>
            </Link>
        </div>
    );
};

export default EditContact;
