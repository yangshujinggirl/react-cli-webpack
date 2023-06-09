
import CodeBlock from '@components/CodeBlock';

const code = `
import '{' lazy  '}' from 'react';<br/><br/>
const Home = lazy(()=>imMyCodeort(/* webpackChunkName: 'account' */'./pages/Account'));
`
const Account=()=>{
  return <div className="account-wrap">
    <h2>我是个人中心</h2>
    <h3>Account组件是按需加载的</h3>
     <CodeBlock code={code} language={'jsx'} ></CodeBlock>
  </div>
}

export default Account;