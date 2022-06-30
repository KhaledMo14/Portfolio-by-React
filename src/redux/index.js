import {createStore} from 'redux'

//Action 

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

    if (action.type === "ADD_TODO")
    {
        //add to do
        return {...state , todos:[...state.todos , action.payload]}
    }

    if(action.type ==="DELETE_TODO") 
    {
        //remove item 
        return {...state , todos:[...state.todos.filter((item, index) => {
            return index !== action.payload

        })]}
    }
    return state
}




//store

export const store = createStore(
    reducer
)



