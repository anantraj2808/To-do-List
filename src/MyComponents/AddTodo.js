import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e)=>{
        e.preventDefault()
        console.log("Title", title)
        console.log("Desc", desc)
        if(!title || !desc) alert("Title or Description cannot be empty")
        else{
            props.addTodo(title, desc)
            setTitle("")
            setDesc("")
        }
    }

  return (
    <div className='container my-3'>
    <h3>Add a todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">To-do title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  <button type="Add" className="btn btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}
