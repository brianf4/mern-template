import { Link } from "react-router-dom"
import { useState } from "react"

function Edit(props) {
  const [todoText, setTodoText] = useState({
    title: props.todoData.title,
    description: props.todoData.description
  })
  
  
  async function updateTodo() {
    const note = {...todoText}
    
    const res = await fetch(`http://localhost:4000/api/todo/${props.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    })
    
  }



  return (
    <section>
      <Link to='/'>
        <h1 className="text-4xl underline hover:text-blue-900">Edit Todo</h1>
      </Link>
      
      <form  className=" border-2 border-black w-max">
        <input 
          name="title"
          value={todoText.title}
          type="text" 
          placeholder="Title" 
          className="input input-bordered w-full max-w-xs" 
          
          defaultValue={`Test Title`}
          required
        />

        <textarea 
          name="description"
          value={todoText.description}
          className="textarea textarea-bordered w-full max-w-xs" placeholder="Description"
          
          defaultValue={`Test info`}
          required
        ></textarea>

          <button 
            type="submit"
            className="btn btn-sm btn-primary"
          >Edit</button>

      </form>
    </section>
  )
}
export default Edit