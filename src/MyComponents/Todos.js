import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem"
export const Todos = (props) => {
    return (
        <div className='mx-4'  >
        <h2 className='text-center'>TodosList</h2>
        {props.todos.length===0?"no todos to display":
            props.todos.map((todo) =>{              
            return<TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
            })}
        
        </div>
    )
}
