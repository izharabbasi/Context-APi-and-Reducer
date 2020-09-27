import React, {useReducer} from "react";
import counterReducer from "./counterReducer";

function Child2(){
    let [state,dispatch] = useReducer(counterReducer, 0)
    return(
        <div>
            <h1>This is Reducer</h1>
            <h3>This is second Child {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    );
}

export default Child2;