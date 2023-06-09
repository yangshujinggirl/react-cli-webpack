import React from 'react';
import { Button } from 'antd';
import { unstable_batchedUpdates } from 'react-dom';
import ContentCard from '@components/ContentCard';
import CodeBlock from '@components/CodeBlock';

const code1=`
  import ReactDOM from 'react-dom';
  import App from './App.jsx';
  import store from './store';
  import { Provider } from 'react-redux';
  import { BrowserRouter } from "react-router-dom";

  //react模式---legacy模式
  ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
  )
`
class TestRouterMod extends React.Component{
  state={
    num1:0,
    num2:0
  }
  testAsync=()=>{
    console.log('testAsync-before',this.state.num1)
    this.setState({num1:this.state.num1 + 1})
    console.log('testAsync-after',this.state.num1)
  }
  testState=()=>{
    console.log('testState-before',this.state.num2)
    setTimeout(()=>{
      unstable_batchedUpdates(this.testBatch)
    },0)
  }
  testBatch=()=>{
    this.setState({num2:this.state.num2 + 1})
      console.log('testState-after1',this.state.num2);
      this.setState({num2:this.state.num2 + 1})
      console.log('testState-after2',this.state.num2);
      this.setState({num2:this.state.num2 + 1})
      console.log('testState-after3',this.state.num2);
  }
  render(){
    console.log('render-num2',this.state.num2)
    return <div>
      <h2>setState同步还是异步？</h2>
      <p>setState本身是同步的，同步或异步是根据react的渲染模式来的,我们常用的有两种模式legacy和concurrent模式。</p>
      <ContentCard title="legacy模式">
        <>
          <h3>step1：开启legacy模式</h3>
          <CodeBlock code={code1} language={'jsx'} title="index.js"></CodeBlock>
          <h3>step2：Demo1</h3>
          <Button onClick={this.testAsync}>setState的异步</Button>
          <Button onClick={this.testState}>setState的同步</Button>
          <h2>{this.state.num2}</h2>
        </>
      </ContentCard>

    </div>
  }
}

export default TestRouterMod;