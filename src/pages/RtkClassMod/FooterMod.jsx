import React from 'react';
import { connect } from "react-redux";
import { increment } from '../../store/reactReduxClass';
import styles from './index.less';

class FooterMod extends React.Component{
  add = ()=>{
    this.props.increment({id:Date.now()})
  }
  render(){
      return <div className={styles['footerMod']}>
        <h3>操作栏组件</h3>
        <p>此模块儿不订阅数据，只派发dispatch(mapStateToProps可为null，需要传mapDispatchToProps)</p>
      <button onClick={this.add}>add一条li数据</button>
    </div>
  }
}
export default connect(null,{increment})(FooterMod);