import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        increment:(state,action)=> state + 1,
        decrement:(state,action)=>state -1,
    }

})

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer