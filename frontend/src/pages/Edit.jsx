import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectTodoById } from "../features/posts/postsSlice"


function Edit() {
  const { todoId } = useParams()
  const [text, setText] = useState('')

  const post = useSelector(state => selectTodoById(state, todoId))
  console.log(post)
  console.log(todoId)

  

  return (
    <section>
      <Link to='/'>
        <h1 className="text-4xl underline hover:text-blue-900">Edit Todo</h1>
      </Link>
      
      <form  className=" border-2 border-black w-max">
        <input 
          name="title"

          type="text" 
          placeholder="Title" 
          className="input input-bordered w-full max-w-xs" 
          
          defaultValue={`Test Title`}
          required
        />

        <textarea 
          name="description"

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