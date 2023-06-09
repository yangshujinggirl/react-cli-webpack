import { useSelector, useDispatch } from 'react-redux'
import { decrement, incrementAsync } from '../../store/counterSlice'
import List from './List';
import FooterMod  from './FooterMod';
const RtkFunctionMod=()=> {
  const {num} = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const asyncAdd=()=>{
    dispatch(incrementAsync(10))
  }
  return <div>
      <h2>redux/toolkit在Hooks组件中的应用</h2>
    <p onClick={asyncAdd}>{num}</p>
    <List/>
    <FooterMod />
  </div>
}
export default RtkFunctionMod;