
// configurestore

import { configureStore } from "@reduxjs/toolkit";
import  counterOPer  from "./counterOPr";
import cartItems from "./ProductsOPer"

export default configureStore({
    reducer:{
        counter : counterOPer,
        cartData: cartItems
        
   }

})