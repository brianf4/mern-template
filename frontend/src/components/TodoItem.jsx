function TodoItem(props) {
  
  return (
    <section className="border-2 border-black w-5/12">
        <section>
          <h2 className="text-2xl font-semibold">{props.title}</h2>
          <span>{props.description}</span>
        </section>
        <section className="flex justify-end">
          <button className="btn btn-square btn-outline">Edit</button>
        </section>
        
    </section>
  )
}
export default TodoItem