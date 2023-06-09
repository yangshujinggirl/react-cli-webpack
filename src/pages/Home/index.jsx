
import CodeBlock from '@components/CodeBlock';

const code = `
import '{' lazy  '}' from 'react';<br/><br/>
const Home = lazy(()=>imMyCodeort(/* webpackChunkName: 'home' */'./pages/Home'));
`
const Home=()=>{
  return <div>
        <h1>react 疑难知识点简介</h1>
        <h3>Home组件是按需加载的</h3>
        <p>利用懒加载动态加载组件,打包时会生成独立的js，当路由匹配时，才会去加载当前组件js资源</p>
     <CodeBlock code={code} language={'jsx'} ></CodeBlock>
    </div>
}
export default Home;