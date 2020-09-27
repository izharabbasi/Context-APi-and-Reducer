import React, {useCallback, useContext} from "react";
import counterContext from "./counterContext";


function Child(){
    let counterValue = useContext(counterContext)

    return(
        <div className='App'>
            <h1>This is ContextAPI</h1>
            <h3>This Is First Child</h3>
            <h3>This is {counterValue[0]}</h3>
            <button onClick={()=>counterValue[1](++counterValue[0])}>Increment Context</button>
        </div>
    );
}
export default Child;