import { Fragment, useCallback, useMemo, useState } from "react"

const Index=()=> {
  const [count,setCount] = useState(0);
  const [num,setNum] = useState(0);
  const depndCount = useMemo(()=>{
    console.log('depndCount')
    return count*2
  },[count]);
  const depndNum = useMemo(()=>{
    console.log('depndNum')
    return num*2
  },[num]);
  const addA=useCallback(()=>{
    console.log('addA')
    setCount(count+1)
  },[count])
  const addNum=useCallback(()=>{
    console.log('addNum')
    setNum(num+1)
  },[num])
  return <Fragment>
     <div>
        <button onClick={addA}>我是count：{count},点我加1</button>
        <p>{`count=count*2=${count}*2`} = {depndCount}</p>
      </div>
      <div>
        <button onClick={addNum}>我是X：{num},点我加1</button>
        <p>{`num=num*2=${num}*2`} = {depndNum}</p>
      </div>
  </Fragment>
}

export default Index;