import React from 'react'

// Don't forget to set up state
export default function contact(props) {
    let name = `${props.contact.name.first} ${props.contact.name.last}`;
    return (
        <li key={props.index}>
            <img src={props.contact.picture.medium} alt={name} />
            <h5>{name}</h5>
            {/* Conditionally render text based on state */}
            {/* Add event handlers */}
            <button>Show Details</button>

            {/* Conditionally render more information based on state */}
        </li>
    )
}
