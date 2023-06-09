import React from 'react';
import * as ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

//react模式---concurrent模式,创建的更新拥有不同的优先级，更新的过程可以打断，配合Scheduler
const root = ReactDOM.createRoot(document.getElementById('root'));//concurrent模式
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

//react模式---legacy模式,setState是异步的，因为它的batchedUpdates批处理模式，当触发多个this.state时，只会合并为一次更新。可以提高react的性能
// ReactDOM.render(
// <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>,
//     document.getElementById('root')
//   )
// root.render(
//   <Provider store={store}>
//     <RouterProvider router={routers} />
//   </Provider>
// )