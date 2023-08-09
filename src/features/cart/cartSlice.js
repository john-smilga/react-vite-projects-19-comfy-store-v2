import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { calculateTotals } from '../../utils';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getCartFromLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    return defaultState;
  }
  return JSON.parse(localStorage.getItem('cart'));
};

const initialState = getCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      calculateTotals(state);
      localStorage.setItem('cart', JSON.stringify(state));
      toast.success('Item added to cart');
    },
    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      calculateTotals(state);
      localStorage.setItem('cart', JSON.stringify(state));
      toast.error('Item removed from cart');
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      calculateTotals(state);
      localStorage.setItem('cart', JSON.stringify(state));
      toast.success('Cart updated');
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
