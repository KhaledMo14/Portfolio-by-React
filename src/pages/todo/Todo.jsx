import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import React from 'react';
import TodoForm from "../../component/todo/TodoForm"
import TodoList from "../../component/todo/TodoList";
import './Todo.css';
import {addTodoAction} from '../../redux/reducers/todoSlice' ;
import {deleteTodoAction} from '../../redux/reducers/todoSlice'

function Todo() {

const todos = useSelector( state => state.todo.todos);
 const dispatch = useDispatch();

  const addTodo = (task) => {
    dispatch(addTodoAction(task))
 
  };

  const deleteTodo = (index) => {
    dispatch(deleteTodoAction(index))
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
