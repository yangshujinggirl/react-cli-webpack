import './index.less';
// import CodeBlock from '@components/CodeBlock';

// const code = `
// new MiniCssExtractPlugin({{filename:'[name].css'}})
// `
const Index=()=>{
  return <div className='question-wrap'>
    <h2 className='ques'>React-router-dom：browserRouter与hashRouter? </h2>
    <div className='ques-con'>
      <p>问题现象1：用browserRouter注册路由，当页面刷新时，页面404</p>
      <p>问题现象2：用browserRouter注册路由，为'/'重定向一个默认的路由地址，打包后未生效。</p>
      <p>打包后的只是一个index.html,路转路由再新刷新时，找不对到应的路由资源，所以报404,需要将刷新后的路由地址一直指向index.html。
      </p>
      <p>解决方案：??????</p>
      {/* <CodeBlock code={code} language={'jsx'} title="wepack.dev.js"></CodeBlock> */}
    </div>
  </div>
}

export default Index;