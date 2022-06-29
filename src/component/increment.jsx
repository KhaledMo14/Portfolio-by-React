import React from 'react';
import { Button } from 'react-bootstrap';

const increment = (props)=> { 

    const increment = () => {
       props.setcount(props.count+1) 
    }

    const decrement = () => {
        if(props.count>0) 
        {
            props.setcount(props.count-1)
        } 
     }
    return <div className="my-4">

        <h2>{props.count}</h2>

        <Button className='my-5 mx-5'  onClick={decrement} variant="primary">{props.title}</Button>{' '}
        <Button className='mx-5' onClick={increment} variant="primary">{props.text}</Button>{' '}

    </div>
    
}

export default increment ;