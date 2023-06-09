import React from 'react';
import { connect } from "react-redux";
import { addTodo } from '../../store/typicalLegacyRedux/actions';

//写法一：
// class FooterMod extends React.Component{
//   add = ()=>{
//     console.log(this.props)
//     this.props.addTodo({id:Date.now(),text:'12333'})
//   }
//   render(){
//       return <div className='footerMod'>
//         <h3>操作栏组件</h3>
//         <p>此模块儿不订阅数据，只派发dispatch(mapStateToProps可为null，需要传mapDispatchToProps)</p>
//       <button onClick={this.add}>add一条li数据</button>
//     </div>
//   }
// }
// export default connect(null,{addTodo})(FooterMod);

//写法二：
class FooterMod extends React.Component{
  add = ()=>{
    const id = Date.now();
    this.props.dispatch(addTodo({id,text:`系统文字-${id}`}))
  }
  render(){
      return <div className='footerMod'>
        <h3>操作栏组件（class 组件）</h3>
        <p>此模块儿不订阅数据，只派发dispatch(mapStateToProps可为null，需要传mapDispatchToProps,mapDispatchToProps不传时会接收整个dispatch)</p>
      <button onClick={this.add}>add一条li数据</button>
    </div>
  }
}
export default connect()(FooterMod);