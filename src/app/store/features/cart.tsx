import { Cart } from "@/app/utils/type";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];
export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    //add to cart
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newObj = { ...action.payload, uuid };
      state.push(newObj);
    },
    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },
    addCart(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );
      if (obj) {
        obj.qty += 1;
      }
    },

    subCart(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );
      if (obj) {
        if (obj.qty > 1) {
          obj.qty -= 1;
        } else {
          return state.filter((val) => val.uuid !== obj.uuid);
        }
      }
    },
  },
});

export const { addToCart, delItem, addCart, subCart } = cartSlice.actions;

export default cartSlice.reducer;
