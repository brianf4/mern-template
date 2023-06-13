import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:4000/api/todo"

const initialState = {
  todos: [],
  status: 'idle',
  error: null
}


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
})

export const postsSlice = createSlice({
  name: 'todos',
  initialState,
  reducers:{
    todoUpdate(state, action) {
      const { id, title, description } = action.payload
      const existingTodo = state.find(todo => todo._id === id)
      if (existingTodo) {
        existingTodo.title = title
        existingTodo.description = description
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched todos to the array
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectAllTodos = (state) => state.todos.todos

// issue with selecting 
export const selectTodoById = (state, todoId) =>
  state.todos.todos.find(todo => todo._id === todoId)

export const { todoUpdate } = postsSlice.actions

export default postsSlice.reducer