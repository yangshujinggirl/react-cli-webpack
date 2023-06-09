import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counterSlice'

const FooterMod=()=> {
  const {list} = useSelector((state)=>state.counter);
  const dispatch = useDispatch()
  const add = ()=>{
    dispatch(increment())
  }
  const deleteAll = ()=>{
    dispatch(decrement())
  }
  return <div>
    <p>总共{list.length}条数据</p>
    <button onClick={add}>add一条数据</button>
    <button onClick={deleteAll}>删除全部</button>
  </div>
}
export default FooterMod;