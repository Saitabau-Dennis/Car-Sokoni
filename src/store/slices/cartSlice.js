import { createSlice } from '@reduxjs/toolkit';
import { loadCartFromStorage, saveCartToStorage } from '../../utils/localStorage';

// Load initial state from localStorage
const persistedCart = loadCartFromStorage();

const initialState = {
  items: persistedCart?.items || [],
  total: persistedCart?.total || 0,
  itemCount: persistedCart?.itemCount || 0,
};

// Helper function to save state to localStorage
const saveCartState = (state) => {
  saveCartToStorage({
    items: state.items,
    total: state.total,
    itemCount: state.itemCount
  });
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      
      cartSlice.caseReducers.calculateTotal(state);
      saveCartState(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      cartSlice.caseReducers.calculateTotal(state);
      saveCartState(state);
    },
    updateCartQuantity: (state, action) => {
      const { carId, quantity } = action.payload;
      const item = state.items.find(item => item.id === carId);
      
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.id !== carId);
        } else {
          item.quantity = quantity;
        }
      }
      
      cartSlice.caseReducers.calculateTotal(state);
      saveCartState(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
      saveCartState(state);
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      state.itemCount = state.items.reduce((count, item) => count + item.quantity, 0);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;



