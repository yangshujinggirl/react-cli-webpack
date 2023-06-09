import { lazy  } from 'react';
import { loader as rootLoader} from './root';
import BasicLayout from '../pages/BasicLayout';
import pageRoots from './pageRoots.jsx';
//动态按需加载，利用webpack的魔法命名定义包名
// const Home = lazy(()=>import(/* webpackChunkName: 'home' */'../pages/Home'));
// const Account = lazy(()=>import(/* webpackChunkName: 'account' */ '../pages/Account'));
// const UseStateMod = lazy(()=>import(/* webpackChunkName: 'useStateMod' */ '../pages/UseStateMod'));
// const MemoAndCallBack = lazy(()=>import(/* webpackChunkName: 'memoAndCallBack' */ '../pages/MemoAndCallBack'));
// const Question = lazy(()=>import(/* webpackChunkName: 'question' */ '../pages/Question'));
// const RtkFunctionMod = lazy(()=>import(/* webpackChunkName: 'rtkFunctionMod' */ '../pages/RtkFunctionMod'));
// const RtkClassMod = lazy(()=>import(/* webpackChunkName: 'rtkClassMod' */ '../pages/RtkClassMod'));
// const TypicalLegacyRedux = lazy(()=>import(/* webpackChunkName: 'typicalLegacyRedux' */ '../pages/TypicalLegacyRedux'));
// const TestRouterMod = lazy(()=>import(/* webpackChunkName: 'testRouterMod' */ '../pages/TestRouterMod'));
// const ThreadMod = lazy(()=>import(/* webpackChunkName: 'threadMod' */ '../pages/ThreadMod'));
const Login = lazy(()=>import(/* webpackChunkName: 'testRouterMod' */ '../pages/Login'));
const NotFound = lazy(()=>import(/* webpackChunkName: 'notFound' */ '../pages/NotFound'));
//createHashRouter打包后不会出现路由404问题
//createBrowserRouter 开发环境与打包后，刷新页面时，都会出现路由404问题
const routers = [
  // {
  //   path: "/",
  //   element: <Navigate to="/home"/>,
  // },
  {
    path: "/",
    element: <BasicLayout />,
    loader:rootLoader,
    children: pageRoots,
  },
  {
    path:'/login',
    element:<Login/>
  },{
    path:'*',
    element:<NotFound/>
  }
]

export default routers;