import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './reducers/counterSlice';
import { todoSlice } from './reducers/todoSlice';
import {shopSlice }from './reducers/shopSlice'



export const store = configureStore ({
    reducer : {
        todo : todoSlice.reducer , 
        counter : counterSlice.reducer ,
        product : shopSlice.reducer
    }

})
