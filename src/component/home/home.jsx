import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getShopItems } from '../../redux/reducers/shopSlice';

function Home() {  
 const dispatch =  useDispatch()

  useEffect(()=> {
    dispatch(getShopItems())
  },[])
  
    return (
  
      <div> <h2 className='text-center'>Home</h2> </div>
  
    );
}


    export default Home;