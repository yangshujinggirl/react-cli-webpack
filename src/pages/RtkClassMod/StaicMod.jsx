import React from 'react';
import { connect } from "react-redux";
import styles from './index.less';

class StaicMod extends React.Component {
  handleDelete=(id)=>{
    this.props.decrement({id});
  }
  render(){
    return <div className={styles['staicMod']}>
        <h3>静态展示组件</h3>
      <p>此模块儿只做数据展示，(只订阅数据,可以不派发dispatch，不传mapDispatchToProps)</p>
      <p className='total'>list组件一共有{this.props.list.length}条数据</p>
    </div>
  }
}

export default connect(
  ((state)=>state.reactReduxClass),
)(StaicMod);