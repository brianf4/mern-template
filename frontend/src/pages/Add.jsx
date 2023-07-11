import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";

function Add() {
    const navigate = useNavigate()
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

     function handlePostSubmit(event) {
        event.preventDefault()
        dispatch(addTodo(text))
        navigate('/')
    }
    
    return (
        <div>
            <form className="flex flex-col" onSubmit={handlePostSubmit}>
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