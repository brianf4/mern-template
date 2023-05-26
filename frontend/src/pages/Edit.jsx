import { Link } from "react-router-dom"

function Edit() {
  return (
    <section>
      <Link to='/'>
        <h1 className="text-4xl underline">Edit Todo</h1>
      </Link>
    </section>
  )
}
export default Edit