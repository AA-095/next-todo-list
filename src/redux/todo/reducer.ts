import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, TodoState, TodoActionTypes } from './types'

const initialState: TodoState = {
  todos: [],
}

export const todoReducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: action.payload.id, text: action.payload.text, completed: false },
        ],
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo,
        ),
      }
    default:
      return state
  }
}
