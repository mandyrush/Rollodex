import React from 'react';
import { useState } from 'react';

// Don't forget to set up state
export default function Contact(props) {
    const [visibility, toggleVisibility] = useState(false);

    let name = `${props.contact.name.first} ${props.contact.name.last}`;

    const handleClick = () => {
        toggleVisibility(!visibility);
    };
    
    return (
        <li key={props.index}>
            <img src={props.contact.picture.medium} alt={name} />
            <h5>{name}</h5>
            {/* Conditionally render text based on state */}
            {/* Add event handlers */}
            <button onClick={handleClick}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>

            {/* Conditionally render more information based on state */}
            { visibility && (
                <div>
                    <p>Phone: {props.contact.phone}</p>
                    <p>Email: {props.contact.email}</p>
                    <p>Location: {props.contact.location.country}</p>
                    <p>Age: {props.contact.dob.age}</p>
                </div>
            )}
        </li>
    )
}
