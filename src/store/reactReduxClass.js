import { createSlice } from '@reduxjs/toolkit';

export const reactReduxClass = createSlice({
  name:"reactReduxClass",
  initialState:{
    list:[{name:'qwe',id:1}],
    num:0
  },
  reducers: {
    increment: (state,{payload}) => {
      const id = payload.id || Date.now();
      state.list.push({id,name:`系统名字-${id}`})
      state.num += 1
    },
    decrement: (state,{payload}) => {
      const list = state.list.filter((el)=>el.id!==payload.id)
      state.num -= 1;
      state.list = list;
    },
    incrementByAmount: (state, action) => {
      state.num += action.payload
    },
  }
})

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
console.log('counterSlice',reactReduxClass)
export const { increment, decrement, incrementByAmount } = reactReduxClass.actions;
export default reactReduxClass.reducer;

