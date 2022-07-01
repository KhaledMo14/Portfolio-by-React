// import { ADD_TODO } from "../variables";
// import { DELETE_TODO } from "../variables";


// const initialState = {
//     todos: [
//         {
//             title: "learn node js",
//             content: "Lorem ipsum dolor sit amet.",
//           },
//           {
//             title: "go to the sea",
//             content: "Lorem ipsum dolor sit amet.",
//           },
//           {
//             title: "walk the dog",
//             content: "Lorem ipsum dolor sit amet.",
//           },
//     ] , 

// }


// export const reducer = (state = initialState , action) => {

//     switch (action.type) 
//     {
//         case ADD_TODO : 
//         return { ...state , todos:[...state.todos , action.payload]} 
        
//         case DELETE_TODO : 
//         return {...state , todos:[...state.todos.filter((item, index) => {
//             return index !== action.payload})]}
        
//         default : return state
//     }

        
//     }
