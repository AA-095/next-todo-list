import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from '../redux/todo/actions'
import { TodoState } from '../redux/todo/types'
import { TodoCard } from '../components/TodoCard'

const TodoApp = () => {
  const [input, setInput] = useState('')
  const todos = useSelector((state: TodoState) => state.todos)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (input) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Todoを追加...' />
      <button onClick={handleSubmit}>追加</button>
      <ul>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todoText={todo.text}
            isChecked={todo.completed}
            onDelete={() => dispatch(deleteTodo(todo.id))}
            onToggle={() => dispatch(toggleTodo(todo.id))}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
