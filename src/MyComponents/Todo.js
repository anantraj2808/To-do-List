import React from 'react'

export const Todo = ({todo, onDelete}) => {
  return (
    <div>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <hr></hr>
    </div>
  )
}
