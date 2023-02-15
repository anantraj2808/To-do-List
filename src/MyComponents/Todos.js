import React from 'react'
import {Todo} from './Todo.js'

export const Todos = (props) => {
  const myStyle = {
    minHeight : "70vh",
    //border: "5px solid green"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" : props.todos.map((todo)=>{
        return <Todo todo = {todo} key = {todo.sNo} onDelete = {props.onDelete}/>
      })}
    </div>
  )
}
