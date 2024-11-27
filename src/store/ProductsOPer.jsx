import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name:'cartData',
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            console.log(action.payload);
            state.push(action.payload)
            return state
        },
        removeItem:(state,action)=>{
            console.log(action.payload);            
            return state.filter(products => products.id !== action.payload.id)
        }
    }
})

export const {addItem,removeItem} = cartSlice.actions
export default cartSlice.reducer