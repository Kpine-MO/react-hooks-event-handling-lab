// Code EyesOnMe Component Here
// In a parent component render a div that shows the sum result of two numbers of your choice , the result should be saved in a state and finally share the result to a paragraph in a child component.

import React from "react";

function EyesOnMe(){
    const focusHandler = () =>{
        console.log("Good!")
    }

    const blurHandler = () =>{
        console.log('Hey! Eyes on me!')
    }
    return(
        <div>
            <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe