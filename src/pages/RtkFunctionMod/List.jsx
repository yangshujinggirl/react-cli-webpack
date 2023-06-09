import { useSelector, useDispatch } from 'react-redux'
import { decrement } from '../../store/counterSlice'

const List=()=> {
  const {list} = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const handleDelete = (id)=>{
    dispatch(decrement({id}))
  }
  return <ul>
    {
      list.map((el)=> (
        <li key={el.id}>{el.name}<button onClick={()=>handleDelete(el.id)}>删除</button></li>
      ))
    }
  </ul>
}
export default List;