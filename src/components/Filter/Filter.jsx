import React from "react";

export const Filter =({onChange, value})=> {


    return (
        <div>
        <h2>Find contacts by name </h2>
                <input type="text"
                name="filter"
                onChange={onChange}
                value={value}



                />
        </div>
        
        
            )

}