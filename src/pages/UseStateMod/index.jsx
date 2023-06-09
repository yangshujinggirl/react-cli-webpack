import { Fragment, useCallback, useMemo, useState } from "react"
import './index.less';
import CodeBlock from '@components/CodeBlock';

const code = `
  setTimeout(()=>{
    setCount(count+1);
  },1000)

  //修改后

  setTimeout(()=>{
    setCount2((preCount)=>preCount+1);
  },1000)
`
const Index=()=> {
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);
  console.log('组件开始渲染了--count',count)
  const depndCount = useMemo(()=>{
    console.log('depndCount：我依赖count,是count的因变量')
    return count*2
  },[count]);

  const addA=useCallback(()=>{
    setCount(count+1);
  },[count])
  const addA2=useCallback(()=>{
    // setTimeout(()=>{
    //   setCount(count+1);
    // },1000)
    console.log('before state',count2)
    setTimeout(()=>{
      setCount2((preCount)=>preCount+1);
      console.log('after state',count2)
    },1000)
  },[count2])

  return <Fragment>
        <h1>useState</h1>
        <h3>使用方法：[count,setCount]= useState(initial)</h3>
        <h3>更新机制：setState-->Function组件更新-->变化后的state值作为组件的初始赋值给state-->页面渲染state值</h3>
        <p>修改state值时，修改的不是当前的state，修改后的state值会作为下一次组件渲染时的state的初始值</p>
        <div className="demo-wrap">
          <h4>Demo1:</h4>
          <button onClick={addA}>我是count={count},点我加1</button>
          <p>{`depndCount=count*2=${count}*2`} = {depndCount}</p>
        </div>
        <div className="demo-wrap">
          <h4>Demo2:</h4>
          <p>问题：利用setTimeout在一定时间内多次点击，执行setState操作时，会出现计算出错的情况,setState拿不到最新的值只会执行一次</p>
          <p>解决：setState传入函数,通过preCount可以拿到最新的state</p>
          <CodeBlock code={code} language={'jsx'} ></CodeBlock>
          <button onClick={addA2}>我是count2={count2},点我加1</button>
          <p>{`depndCount=count*2=${count2}*2`} = {depndCount}</p>
        </div>
  </Fragment>
}

export default Index;