import { Link, useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectTodoById, updateTodo } from "../features/posts/postsSlice"


function Edit() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { todoId } = useParams()
  const post = useSelector(state => selectTodoById(state, todoId))

  const [text, setText] = useState({
    title: post.title,
    description: post.description
  })

  async function handleSubmit(event) {
    event.preventDefault()

    await dispatch(updateTodo({todoId, text})).unwrap()
    navigate('/')
  }
  

  function handleChange(event) {
    setText(prevText => {
      return {
        ...prevText,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <section>
      <Link to='/'>
        <h1 className="text-4xl underline hover:text-blue-900">Edit Todo</h1>
      </Link>
      
      <form onSubmit={handleSubmit} className=" border-2 border-black w-max">
        <input 
          name="title"
          value={text.title}
          type="text" 
          placeholder="Title" 
          className="input input-bordered w-full max-w-xs" 
          onChange={handleChange}
          required
        />

        <textarea 
          name="description"
          value={text.description}
          className="textarea textarea-bordered w-full max-w-xs" placeholder="Description"
          onChange={handleChange}
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