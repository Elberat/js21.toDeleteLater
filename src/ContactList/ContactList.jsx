import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactList = ({ getContact, contact, deleteContact }) => {
    useEffect(() => {
        getContact();
    }, []);
    console.log(contact);
    return (
        <div>
            {contact.map(item => (
                <div style={{ border: '1px solid black', margin: '15px' }} key={item.id}>
                    <div>Name: {item.name}</div>
                    <div>Last name: {item.lastName}</div>
                    <div>Email: {item.email}</div>

                    <button onClick={() => deleteContact(item.id)}>Delete</button>
                    <Link to={`/details/${item.id}`}>
                        <button>Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
