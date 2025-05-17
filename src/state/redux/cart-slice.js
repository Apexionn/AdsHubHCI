import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemExist = state.value.find(
        (item) => item.id === action.payload.id
      );
      // only add to cart once
      if (!isItemExist) {
        state.value.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.value.find(
        (item) => item.id === action.payload.id
      );
      // remove if exist
      if (existingItem) {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    resetCart: (state) => {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = CartSlice.actions;