export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: {
    id: number
    text: string
  }
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO
  payload: { id: number }
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO
  payload: { id: number }
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | ToggleTodoAction

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TodoState {
  todos: Todo[]
}
