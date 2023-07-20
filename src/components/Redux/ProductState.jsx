import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProduct: [],
  user: [],
  addcart: [],
  signout: "",
  history: [],
  };

const productState = createSlice({
  name: "Product",
  initialState,
  reducers: {
    allApiData: (state, { payload }) => {
      state.allProduct = payload;
    },

    userData: (state, { payload }) => {
      state.user = payload;
    },

    signOut: (state) => {
      state.user = null;
    },

    removeCart: (state, { payload }) => {
      state.addcart = state.addcart.filter((fl) => fl.id !== payload.id);
      console.log(payload);
    },

    addToCart: (state, { payload }) => {
      const check = state.addcart.findIndex((item) => item.id === payload.id);
      if (check >= 0) {
        state.addcart[check].QTY += 1;
      } else {
        const addValue = {
          ...payload,
          QTY: 1,
        };
        state.addcart.push(addValue);
        console.log("added");
      }
    },

    minusQty: (state, { payload }) => {
      const check = state.addcart.findIndex((item) => item.id === payload.id);
      if (check >= 0) {
        if (state.addcart[check].QTY > 1) {
          state.addcart[check].QTY -= 1;
        } else {
          state.addcart.splice(check, 1);
        }
      }
    },
  },
});

export const {
  allApiData,
  userData,
  signOut,
  removeCart,
  addToCart,
  QTY,
  minusQty,
} = productState.actions;
export default productState.reducer;
