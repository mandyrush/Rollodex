import React from 'react'

import Contact from './contact';

export default function contacts(props) {
    return (
        <ul>
            {props.contacts.map((contact, index) => {
                return (
                    <Contact index={index} contact={contact} />
                )
            })}
        </ul>
    )
}
