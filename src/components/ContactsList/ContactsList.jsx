import React from "react";
import { Contact } from "./Contact";


export const ContactList =({contacts, onDelete}) => {
    return (
        <div>
            <h2>Phonebook</h2>
            <ul>
        {contacts.map(el => (
         <Contact data={el}
onDelete={onDelete}

         />
))}
        </ul>
        </div>

        
    )
}