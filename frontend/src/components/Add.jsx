import { useState } from "react"

function Add(props) {
  const [todoNote, setTodoNote] = useState({
    title: '',
    description: ''
  })

  function handleChange(event) {
    setTodoNote((prevTodoNote) => {
      return {
        ...prevTodoNote,
        [event.target.name]: event.target.value
      }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    
    const todo = {...todoNote}

    const res = await fetch('http://localhost:4000/api/todo', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    props.setTodoData([...props.todoData, todo])

    const data = await res.json()

    if (!res.ok) {
      setTodoNote((prevTodoNote) => {
        return {
          ...prevTodoNote,
          error: data.error
        }
      })
    }

    if (res.ok) {
      //resets state after submit
      setTodoNote((prevTodoNote) => {
        return {
          ...prevTodoNote,
          title: '',
          description: ''
        }
      })
    }
  }


  return (
      <form onSubmit={handleSubmit} className=" border-2 border-black w-max">
        <h3>Add Note</h3>
        <input 
          name="title"
          value={todoNote.title}
          type="text" 
          placeholder="Title" 
          className="input input-bordered w-full max-w-xs" 
          onChange={handleChange}
          required
        />

        <textarea 
          name="description"
          value={todoNote.description}
          className="textarea textarea-bordered w-full max-w-xs" placeholder="Description"
          onChange={handleChange}
          required
        ></textarea>

          <button 
            type="submit"
            className="btn btn-sm btn-primary"
          >Add+</button>

      </form>
  )
}
export default Add