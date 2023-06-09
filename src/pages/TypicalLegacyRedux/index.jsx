/*
 * @Author: 杨静 jing.yang03@weimob.com
 * @Date: 2023-02-26 12:38:18
 * @LastEditors: 杨静 jing.yang03@weimob.com
 * @LastEditTime: 2023-03-24 17:05:39
 * @Description:
 */
import React from 'react';
import List from './List';
import FooterMod from './FooterMod';
import StaicMod from './StaicMod';
import FuncMod from './FuncMod';
import styles from './index.less';
import CodeBlock from '@components/CodeBlock';
import { code1,code2,code3,code4,configureStoreCode } from './codes';




class ReduxClassMod extends React.Component {
  render(){
  console.log('List',<FooterMod />)
    return <div className={styles["reduxClassWrap"]}>
      <h2>TypicalLegacyRedux在class组件中的应用</h2>
      <p>
      典型的已经过时的Redux代码库有它自已的reducers逻辑、需要创建单独的actions,type常量,reducers文件，并且这些文件通常按类型位于单独的文件夹中。配置起来较麻烦
      </p>
      <h3>使用方法</h3>
      <h5>一：注册store</h5>
      <CodeBlock code={configureStoreCode} language={'jsx'} title="configureStore.js"></CodeBlock>
      <CodeBlock code={code1} language={'jsx'} title="main.js"></CodeBlock>
      <hr/>
      <h5>一：整合reducers</h5>
      <CodeBlock code={code3} language={'jsx'} title="reducers/todos.js"></CodeBlock>
      <CodeBlock code={code4} language={'jsx'} title="reducers/counter.js"></CodeBlock>
      <CodeBlock code={code2} language={'jsx'} title="reducers/index.js"></CodeBlock>
      <hr/>
      <h2>Example 1：redux在Class组件中的应用</h2>
      <List />
      <FooterMod />
      <StaicMod />
      <hr/>
      <h2>Example 2：redux在Hooks组件中的应用</h2>
      <FuncMod/>
    </div>
  }
}

export default ReduxClassMod






