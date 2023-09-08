import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, TodoActionTypes } from './types'

let nextTodoId = 0

export const addTodo = (text: string): TodoActionTypes => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
  },
})

export const deleteTodo = (id: number): TodoActionTypes => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
})

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
})
