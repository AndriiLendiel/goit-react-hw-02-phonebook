import React  from "react";



export const Contact = ({data : {id,number, name}, onDelete}) => {
    return (
        <li key={id}>
{name} tel: {number}
<button onClick={() => onDelete(id)}>Delete</button>
        </li>
    )
}

