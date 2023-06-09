import React from 'react';
import { connect } from "react-redux";
import { deleteTodo } from '../../store/typicalLegacyRedux/actions';
import styles from './index.less';

class List extends React.Component {
  handleDelete=(id)=>{
    this.props.deleteTodo(id);
  }
  render(){
    return <div className={styles['list-wrap']}>
      <h3>list组件（class 组件）</h3>
      <p>此模块儿即订阅数据，又派发dispatch（mapStateToProps，mapDispatchToProps都要传）</p>
      <ul>
        {
          this.props.list.map((el)=>(
            <li key={el.id}>{el.text}<button onClick={()=>this.handleDelete(el.id)}>删除</button></li>
          ))
        }
      </ul>
    </div>
  }
}

export default connect(
  ((state)=>state.typeicReducers),
  { deleteTodo }
)(List);