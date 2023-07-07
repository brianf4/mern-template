import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/posts/postsSlice";

function Add() {
    const dispatch = useDispatch()
    const [text, setText] = useState({
        title: '',
        description: ''
    })

    function handleChange(event) {
        setText(prevText => {
            return {
              ...prevText,
              [event.target.name]: event.target.value
            }
          })
    }

    async function handlePostSubmit() {
        await dispatch(addTodo(text))
    }
    
    return (
        <div className="flex flex-col">
            <form onSubmit={handlePostSubmit}>
                <label>Title: </label>
                <input 
                    type="text" 
                    name="title"
                    onChange={handleChange}
                    placeholder="Type here" 
                    className="input input-bordered input-secondary w-full max-w-xs" 
                />
                <label>Description: </label>
                <input 
                    type="text" 
                    name="description"
                    onChange={handleChange}
                    placeholder="Type here" 
                    className="input input-bordered input-secondary w-full max-w-xs" 
                />
                <div className="w-full max-w-xs flex justify-end">
                    <button className="btn btn-primary">Add!</button>
                </div>
            </form>
        </div>
    )
}
export default Add