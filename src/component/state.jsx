import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Button } from 'react-bootstrap';
import { incrementAction } from "../redux/reducers/counterSlice";
import { decrementAction } from "../redux/reducers/counterSlice";

const State = ()=> {

    const counter = useSelector( state => state.counter.counter);
    const dispatch = useDispatch();

    return <div className="text-center">
       <div className="my-4">

      <h2>{counter}</h2>

       <Button className='my-5 mx-5'  onClick={()=>dispatch(incrementAction())} variant="primary">Increment</Button>{' '}
      <Button className='mx-5' onClick={()=>dispatch(decrementAction())} variant="primary">Decrement</Button>{' '}

</div>
    </div>
    
}


export default State;