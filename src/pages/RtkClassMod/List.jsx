import React from 'react';
import { connect } from "react-redux";
import { decrement } from '../../store/reactReduxClass';
import styles from './index.less';

class List extends React.Component {
  handleDelete=(id)=>{
    //一：可直接调用actoin,传action进来即可
    this.props.decrement({id});
    //二：不传mapDispatchToProps,通过dispatch分发action
    // this.props.dispatch(decrement({id}))
  }
  render(){
    console.log(this.props)
    return <div className={styles['list-wrap']}>
      <h3>list组件</h3>
      <p>此模块儿即订阅数据，又派发dispatch（mapStateToProps，mapDispatchToProps都要传）</p>
      <ul>
        {
          this.props.list.map((el)=>(
            <li key={el.id}>{el.name}<button onClick={()=>this.handleDelete(el.id)}>删除</button></li>
          ))
        }
      </ul>
    </div>
  }
}

export default connect(
  ((state)=>state.reactReduxClass),
  { decrement }
)(List);;