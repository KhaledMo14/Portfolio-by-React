// import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


// const baseUrl = "https://fakestoreapi.com/products"; 

// export const getProducts = createAsyncThunk("shop/getProducts" , ()=> {
//   return  fetch(baseUrl)
//     .then((res) => res.json())
//     .catch((error)=>console.log(error));

// } )
// const initialState = {
//     products : [],
//     loading : false ,
//     err : {}
// }

//  export const shopSlice = createSlice ({
//     name : 'shop' , 
//     initialState ,
//     reducers : { 
//         addProduct : ()=> {
//             console.log('product')
//         } 
//     }, 
//         extreaReducers /* reducer to call api */ : {
//             [getProducts.pending] : (state)=> {
//                 //pending 
//                 state.loading = true
//             } ,

//             [getProducts.fulfilled] : (state , action)=> {

//                 //fulfilled
//                 state.products = action.payload ,
//                 state.loading = false
//             },

//             [getProducts.rejected] : (state , action)=> {
//                 //rejected
//                 state.err = action.payload 
//                 state.loading = false

//             },
        

//     }
// })


// export const {addProduct} = shopSlice.actions;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const baseURL = 'https://fakestoreapi.com'

export const getShopItems = createAsyncThunk('shop/getShopItems', () => {
   return fetch(`${baseURL}/products`)
    .then((res) => res.json())
    .then((json) => json)
    .catch(err=>console.log(err))
})

const initialState = {
    products: [],
    loading: false,
    err:{}
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers:{
        addProduct : () => {
            console.log('add produc')
        }
    },
    extraReducers: {
        [getShopItems.pending] : (state) => {
            // pending
            state.loading = true
        },
        [getShopItems.fulfilled] : (state, action) => {
            // fulfilled
            state.products = action.payload
            state.loading = false
        },
        [getShopItems.rejected] : (state, action) => {
            // rejected
            state.err = action.payload
            state.loading = false
        },
    }
})

export const { addProduct } = shopSlice.actions

// export default shopSlice.reducer



// [getShopItems.pending] : (state) => {
//     // pending
//     state.loading = true
// },
// [getShopItems.fulfilled] : (state, action) => {
//     // fulfilled
//     state.products = action.payload
//     state.loading = false
// },
// [getShopItems.rejected] : (state, action) => {
//     // rejected
//     state.err = action.payload
//     state.loading = false
// },
