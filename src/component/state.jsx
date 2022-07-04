import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Button } from 'react-bootstrap';
import { increment } from "../redux/reducers/counterSlice";
import { decrement } from "../redux/reducers/counterSlice";
import {reset} from "../redux/reducers/counterSlice" ;
import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";




const State = ()=> {

    const [showToaster , setShowToaster] = useState(false);
    const [donateCount , setDonateCount] = useState(0);
   


    const counter = useSelector( state => state.counter.counter);
    const dispatch = useDispatch();
    
 

    return <div className="text-center">
        <h2 className="mt-5">Please Support Us</h2> 
        <img src={require('../assets/dollars (1).png')}/>
       <div className="my-4 mt-5 border">

<div className="d-flex justify-content-center">
      <h2 className="mx-4 my-3">{counter} $</h2>
      </div>

<div className="button">
       <Button className='my-5 mx-5'  onClick={()=>dispatch(increment())} variant="primary">Increment</Button>{' '}
      <Button className='mx-5' onClick={()=>dispatch(decrement())} variant="primary">Decrement</Button>{' '}
      </div>
      <Button className='mx-5' onClick={()=>{
        setDonateCount(counter)
        console.log(donateCount)
       setShowToaster(true)
        dispatch(reset())
        }} variant="success">Donate</Button>{' '} 
   
      

      <ToastContainer className="p-3" position="top-end">
        <Toast
          bg="success"
          show={showToaster}
          onClose={() => {
            setShowToaster(!showToaster);
          }}
        >
          <Toast.Header closeButton={true}>
            <strong>Thanks 🧡</strong>
          </Toast.Header>

          <Toast.Body className="text-white">
            Thank you for donating {donateCount}$
          </Toast.Body>
        </Toast>
      </ToastContainer>
     

</div>
    </div>
    
}


export default State;