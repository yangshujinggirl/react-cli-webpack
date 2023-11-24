
import CodeBlock from '@components/CodeBlock';
import axios from 'axios';
import { useEffect } from 'react';

const code = `
import '{' lazy  '}' from 'react';<br/><br/>
const Home = lazy(()=>imMyCodeort(/* webpackChunkName: 'home' */'./pages/Home'));
`
const Home=()=>{
  function fetchList(params) {
    axios.post('/testNginx/list',{name:123})
        .then(function (response) {
          // 处理成功情况
          console.log(response);
        })
        .catch(function (error) {
          // 处理错误情况
          console.log(error);
        })
        .finally(function () {
          // 总是会执行
        });
  }
  useEffect(()=>{
    fetchList()
  },[])
  return <div>
        <h1>react 疑难知识点简介</h1>
        <h3>Home组件是按需加载的</h3>
        <p>利用懒加载动态加载组件,打包时会生成独立的js，当路由匹配时，才会去加载当前组件js资源</p>
     <CodeBlock code={code} language={'jsx'} ></CodeBlock>
    </div>
}
export default Home;