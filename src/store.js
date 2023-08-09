import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';
export const store = configureStore({
  reducer: {
    userState: userReducer,
    cartState: cartReducer,
  },
});
