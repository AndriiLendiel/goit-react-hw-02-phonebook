import React  from "react";



export const Contact = ({data}) => {
    return (
        <li key={data.id}>
{data.name} tel: {data.number}
        </li>
    )
}

