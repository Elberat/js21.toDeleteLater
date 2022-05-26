import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AddContact = ({ addContact }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [check, setCheck] = useState(false);

    function handleValues() {
        if (name && lastName && email) {
            let newContact = {
                name,
                lastName,
                email,
            };
            addContact(newContact);
        }
        alert('zapolnite vse polya');
        // console.log(newContact);
    }

    return (
        <div>
            <input onChange={e => setName(e.target.value)} type='text' placeholder='Name' />
            <input onChange={e => setLastName(e.target.value)} type='text' placeholder='Last Name' />
            <input onChange={e => setEmail(e.target.value)} type='text' placeholder='Email' />

            <input type='checkbox' value={check} onChange={() => setCheck(!check)} />
            <Button disabled={check ? false : true} onClick={() => handleValues()} variant='warning'>
                Save
            </Button>
        </div>
    );
};

export default AddContact;
