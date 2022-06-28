import React , { useState } from "react";
import Increment from "./increment";

const State = ()=> {

    const [counter , setCounter] = useState(0); 

    return <div className="text-center">
        <Increment setcount={setCounter} text="increment" title="decrement" count={counter}/>
    </div>
    
}


export default State;