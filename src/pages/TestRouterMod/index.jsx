import { Outlet,Link } from 'react-router-dom';
import React from 'react';

class TestRouterMod extends React.Component{
  render(){
    return <div>
      <h2>路由嵌套</h2>
      <Link to="qiantao">去列表页</Link>
      <Outlet />
    </div>
  }
}

export default TestRouterMod;