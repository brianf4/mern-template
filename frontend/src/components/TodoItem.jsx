import { Link } from "react-router-dom"

function TodoItem(props) {
  
  return (
    <section className="border-2 border-black w-5/12">
        <section> 
          <h2 className="text-2xl font-semibold">{props.title}</h2>
          <span>{props.description}</span>
        </section>
        <section className="flex justify-end">
          <Link to="edit">
            <button className="btn btn-square btn-outline">Edit</button>
          </Link>
        </section>
        
    </section>
  )
}
export default TodoItem