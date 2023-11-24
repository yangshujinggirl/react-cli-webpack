import { lazy  } from 'react';
import {lazyLoad} from '@common/index';
//动态按需加载，利用webpack的魔法命名定义包名
const Home = lazy(()=>import(/* webpackChunkName: 'home' */'../pages/Home'));
const Account = lazy(()=>import(/* webpackChunkName: 'account' */ '../pages/Account'));
const UseStateMod = lazy(()=>import(/* webpackChunkName: 'useStateMod' */ '../pages/UseStateMod'));
const MemoAndCallBack = lazy(()=>import(/* webpackChunkName: 'memoAndCallBack' */ '../pages/MemoAndCallBack'));
const Question = lazy(()=>import(/* webpackChunkName: 'question' */ '../pages/Question'));
const RtkFunctionMod = lazy(()=>import(/* webpackChunkName: 'rtkFunctionMod' */ '../pages/RtkFunctionMod'));
const RtkClassMod = lazy(()=>import(/* webpackChunkName: 'rtkClassMod' */ '../pages/RtkClassMod'));
const TypicalLegacyRedux = lazy(()=>import(/* webpackChunkName: 'typicalLegacyRedux' */ '../pages/TypicalLegacyRedux'));
const TestRouterMod = lazy(()=>import(/* webpackChunkName: 'testRouterMod' */ '../pages/TestRouterMod'));
const ThreadMod = lazy(()=>import(/* webpackChunkName: 'threadMod' */ '../pages/ThreadMod'));
const EventLoopMod = lazy(()=>import(/* webpackChunkName: 'eventLoopMod' */ '../pages/EventLoop'));
const SetStateMod = lazy(()=>import(/* webpackChunkName: 'setStateMod' */ '../pages/SetStateMod'));
const SpecialLayout = lazy(()=>import(/* webpackChunkName: 'setStateMod' */ '../pages/SpecialLayout'));
const Algepa = lazy(()=>import(/* webpackChunkName: 'algepa' */ '../pages/Algepa'));
// const Login = lazy(()=>import(/* webpackChunkName: 'testRouterMod' */ '../pages/Login'));
// const NotFound = lazy(()=>import(/* webpackChunkName: 'notFound' */ '../pages/NotFound'));
//createHashRouter打包后不会出现路由404问题
//createBrowserRouter 开发环境与打包后，刷新页面时，都会出现路由404问题
const menuData =[
  {
    path:'specialLayout',
    key:'specialLayout',
    label:'经典样式布局',
    authority:['12'],
    element:lazyLoad(SpecialLayout),
  },
  {
    path:'nest',
    key:'nest',
    label:'routers 嵌套',
    authority:['1'],
    element:lazyLoad(TestRouterMod),
  },
  {
    path:'home',
    key:'home',
    label:'首页',
    authority:['2'],
    element: lazyLoad(Home),
  },{
    path:'account',
    key:'account',
    label:'account',
    authority:['3'],
    element: lazyLoad(Account),
  },{
    path:'memo',
    key:'memo',
    label:'useMemo &useCallback',
    authority:['4'],
    element: lazyLoad(MemoAndCallBack),
  },{
    path:'useState',
    key:'useState',
    label:'useState',
    authority:['5'],
    element: lazyLoad(UseStateMod),
  },{
    path:'question',
    key:'question',
    label:'问题集锦',
    authority:['6'],
    element: lazyLoad(Question),
  },{
    path:'rtkFunc',
    key:'rtkFunc',
    label:'react-toolkit',
    authority:['7'],
    element: lazyLoad(RtkFunctionMod),
  },{
    path:'rtkClass',
    key:'rtkClass',
    label:'react-toolkit-RtkClassMod',
    authority:['8'],
    element: lazyLoad(RtkClassMod),
  },{
    path:'typicalRedux',
    key:'typicalRedux',
    label:'typical-legacy-redux',
    authority:['9'],
    element: lazyLoad(TypicalLegacyRedux),
  },{
    path:'thread',
    key:'thread',
    label:'线程与进程',
    authority:['10'],
    element:lazyLoad(ThreadMod)
  },{
    path:'eventloop',
    key:'eventloop',
    label:'事件循环Eventloop',
    element:lazyLoad(EventLoopMod)
  },{
    path:'setState',
    key:'setState',
    label:'setState同步异步',
    element:lazyLoad(SetStateMod)
  },{
    path:'algepa',
    key:'algepa',
    label:'代数',
    element:lazyLoad(Algepa)
  }
]

export default menuData;
