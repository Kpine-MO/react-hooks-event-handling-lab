// Code Keypad Component Here

import React from "react";

function Keypad(){

    const eventHandler = () =>{
        console.log('Entering password...')
    }
    return(
        <div>
            <input type="password" onChange={eventHandler}/>
        </div>
    )
}

export default Keypad