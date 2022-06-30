import {createStore} from 'redux'

//Action 

let ADD_TODO = "ADD_TODO";
let DELETE_TODO = "DELETE_TODO";


export const addTodoAction  = (payload) => {
    return {
        type : "ADD_TODO" , 
        payload
    }
}

export const deleteTodoAction = (payload)=>{
    return {
        type : "DELETE_TODO" ,
        payload
    }
}



//intial state

const initialState = {
    todos: [
        {
            title: "learn node js",
            content: "Lorem ipsum dolor sit amet.",
          },
          {
            title: "go to the sea",
            content: "Lorem ipsum dolor sit amet.",
          },
          {
            title: "walk the dog",
            content: "Lorem ipsum dolor sit amet.",
          },
    ]
}


//Reducer 

const reducer = (state = initialState , action) => {

    switch (action.type) 
    {
        case ADD_TODO : 
        return { ...state , todos:[...state.todos , action.payload]} 
        ;
        case DELETE_TODO : 
        return {...state , todos:[...state.todos.filter((item, index) => {
            return index !== action.payload

        })]}
    }

        return state
        
    }





export const store = createStore(
    reducer
)


