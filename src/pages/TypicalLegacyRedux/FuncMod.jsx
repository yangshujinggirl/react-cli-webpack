// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../../store/typicalLegacyRedux/actions';
import CodeBlock from '@components/CodeBlock';
import { funcModAction,funcModShow } from './codes';

//传统写法
// const  StaicMod=(props)=> {
//   const handleDelete=(id)=>{
//     props.dispatch(deleteTodo(id))
//   }
//   return <div className='staicMod'>
//       <h3>函数组件</h3>
//       <ul>
//       {
//         props.list.map((el)=>(
//           <li key={el.id}>{el.text}<button onClick={()=>handleDelete(el.id)}>删除</button></li>
//         ))
//       }
//     </ul>
//     <p className='total'>list组件一共有{props.list.length}条数据</p>
//   </div>
// }
// export default connect((state)=>state.typeicReducers)(StaicMod);

//hooks写法
const  FuncMod=()=> {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.typeicReducers);
  const handleDelete=(id)=>{
    dispatch(deleteTodo(id))
  }
  const  handleAdd = ()=>{
    const id = Date.now();
    dispatch(addTodo({id,text:`系统文字-${id}`}))
  }
  return <div className='staicMod'>
      <h3>函数组件：hooks+redux</h3>
      <CodeBlock code={funcModAction} language={'jsx'} title="actions.js"></CodeBlock>
      <CodeBlock code={funcModShow} language={'jsx'} title="FuncMod.js"></CodeBlock>
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

export default FuncMod;