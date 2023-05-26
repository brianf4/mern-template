import { Link } from "react-router-dom"

function TodoItem(props) {
  
  return (
    <section className="p-4 border-2 border-black w-5/12">
        <section> 
          <h2 className="text-2xl font-semibold">{props.todo.title}</h2>
          <span>{props.todo.description}</span>
        </section>
        <section className="flex justify-between items-center">
          <span>{props.todo.createdAt}</span>
          <Link to="edit">
            <button className="btn btn-square btn-outline">Edit</button>
          </Link>
          
        </section>
        
    </section>
  )
}
export default TodoItem