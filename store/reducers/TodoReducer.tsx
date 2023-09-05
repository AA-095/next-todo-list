// 初期データ
const INITIAL_DATA = [
    {
      id: 0,
      text: "ご飯を作る",
      completed: true
    },
    {
      id: 1,
      text: "洗濯物を干す",
      completed: false
    },
    {
      id: 2,
      text: "映画を見る",
      completed: false
    }
  ];

  import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO
} from "../actions/actionsTypes";

const TodoReducer = (state = INITIAL_DATA, action:any) => {
  const numIndex = parseInt(action.id);

  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== numIndex);

    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === numIndex ? { ...todo, text: action.text } : todo
      );

    default:
      return state;
  }
};

export default TodoReducer;