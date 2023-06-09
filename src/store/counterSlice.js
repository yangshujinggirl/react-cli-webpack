import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name:"counter",
  initialState:{
    list:[{name:'qwe',id:1}],
    num:0
  },
  reducers: {
    increment: (state) => {
      const id = Date.now();
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

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

