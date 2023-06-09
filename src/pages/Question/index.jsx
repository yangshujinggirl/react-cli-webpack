import cssHotImg from '@assets/css_hot.png';
import cssHotImg1 from '@assets/css_hot1.png';
import styles from './index.less';
import CodeBlock from '@components/CodeBlock';
import HistoryMod from './HistoryMod';


const code = `
new MiniCssExtractPlugin({{filename:'[name].css'}})
`
const Index=()=>{
  return <div className={styles['question-wrap']}>
    <h2 className={styles['ques']}>一：Webpack 5,MiniCssExtractPlugin.loader让HMR失效? </h2>
    <div className={styles['ques-con']}>
      <p>问题现象：修改css时，HMR成功加载所有css成功，但页面未刷新</p>
      <img src={cssHotImg}/>
      <p>排查发现：mini-css-extract-plugin暂时不支持热重载，修改css时，contenthash值就不会变化，页面使用的是缓存中的css文件，
        所以MiniCssExtractPlugin中配置filename带contenthash时，会让页面HMR失效。
      </p>
      <img src={cssHotImg1}/>
      <p>解决方案：去除filename中的hash值</p>
      <CodeBlock code={code} language={'jsx'} title="wepack.dev.js"></CodeBlock>
    </div>
    <HistoryMod />
  </div>
}

export default Index;