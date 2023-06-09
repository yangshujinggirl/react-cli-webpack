import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './constants'


const initialState = {
  name:'传统redux写法',
  desc:"传统redux写法较为繁锁，需要创建action常量文件，action文件，reducers文件",
  list:[]
}
export default function typeicReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const list = state.list.concat({
        id: action.id,
        text: action.text,
        completed: false
      })
      return {...state, list};
    }
    case DELETE_TODO: {
      const list = state.list.filter((el)=>el.id!==action.id)
      return {...state, list};
    }
    case TOGGLE_TODO: {
      return state.list.map(todo => {
        if (todo.id !== action.id) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }
    default:
      return state
  }
}