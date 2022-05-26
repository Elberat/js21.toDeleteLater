import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = ({ getOneContact, oneContact }) => {
    const params = useParams();
    useEffect(() => {
        getOneContact(params.id);
    }, []);
    console.log(oneContact);

    if (!oneContact) {
        return <h1>loading...</h1>;
    }

    return (
        <div>
            <div>name: {oneContact.name}</div>
            <div>Last name: {oneContact.lastName}</div>
            <div>email: {oneContact.email}</div>
            <Link to={`/edit/${oneContact.id}`}>
                <button>Edit</button>
            </Link>
        </div>
    );
};

export default Details;
