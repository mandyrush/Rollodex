import React from 'react'

import Contact from './contact';

export default function Contacts(props) {
    return (
        <ul>
            {props.contacts.map((contact, index) => {
                return (
                    <Contact key={index} index={index} contact={contact} />
                )
            })}
        </ul>
    )
}
