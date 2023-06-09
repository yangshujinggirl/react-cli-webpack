import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import reactReduxClass from './reactReduxClass';
import typeicReducers from './typicalLegacyRedux/typeicReducers';
export default configureStore({
  reducer: {
    counter: counterSlice,
    reactReduxClass,
    typeicReducers
  },
});