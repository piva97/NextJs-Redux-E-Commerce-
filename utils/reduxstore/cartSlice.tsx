
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface cartState {
  cart: [{ id: string, name: string, price: number,
    description: string,
  
  
  }];
}

const initialState: cartState = {
  cart: [{ id: "", name: '', price: 0, description: "" }],
};

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.cart.push(action.payload); 
      console.log(state.cart);
    },
    
    clearCart: (state)=>{
      state.cart = [{ id: '', description: "", name: "", price: 0  }]
    },
  },
});
export const { addToCart } = slice.actions;
export const selectCart = (state: RootState) => state.cart.cart;
export default slice.reducer;
