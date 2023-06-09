const code1 = `
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
`;
const configureStoreCode = `
/*-----------------------middleware/logger.js start--------------------*/
  const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }
  export default logger;
/*-----------------------logger  end--------------------------------*/

/*-----------------------enhancers/monitorReducer.js start--------------------*/
  const round = number => Math.round(number * 100) / 100
  const monitorReducerEnhancer =
    createStore => (reducer, initialState, enhancer) => {
      const monitoredReducer = (state, action) => {
        const start = performance.now()
        const newState = reducer(state, action)
        const end = performance.now()
        const diff = round(end - start)

        console.log('reducer process time:', diff)

        return newState
      }

      return createStore(monitoredReducer, initialState, enhancer)
    }

  export default monitorReducerEnhancer;
  /*-----------------------monitorReducer end--------------------------------*/

  import { applyMiddleware, compose, createStore } from 'redux'
  import thunkMiddleware from 'redux-thunk';//增强dispatch功能，使其可以dispatch一个函数，处理异步逻辑居多

  import monitorReducersEnhancer from './enhancers/monitorReducers'
  import loggerMiddleware from './middleware/logger';//dispatch的行为和最新的state结果日志
  import rootReducer from './reducers';//增强器,为Redux存储添加额外的功能,记录简化程序处理每个action所花费的时间

  export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = compose(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
  }
`
const code2 = `
import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'

export default combineReducers({
  todos,
  counter
})`;
const code3=`
const initialState = []
export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
`
const code4 = `
export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
`
const funcModAction = `
  import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './constants'
  //todos
  export const addTodo = ({id, text}) => ({
    type: ADD_TODO,
    text,
    id
  })

  export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
  })

  export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
  })
`
const funcModShow = `
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../../store/typicalLegacyRedux/actions';

  const  StaicMod=()=> {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.typeicReducers);
    const handleDelete=(id)=>{
      dispatch(deleteTodo(id))
    }
    const  handleAdd = ()=>{
      const id = Date.now();
      dispatch(addTodo({id,text:'系统文字-'+id}))
    }
    return <div className='staicMod'>
        <h3>函数组件</h3>
        <ul>
        {
          state.list.map((el)=>(
            <li key={el.id}>{el.text}<button onClick={()=>handleDelete(el.id)}>删除</button></li>
          ))
        }
      </ul>
      <p className='total'>一共有{state.list.length}条数据</p>
      <button onClick={handleAdd}>add一条li数据</button>
    </div>
  }

  export default StaicMod;
`
export {
  code1,code2,code3,code4,configureStoreCode,funcModShow,funcModAction
}