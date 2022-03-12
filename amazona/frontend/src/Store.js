import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
}

function reducer(state, action) {
  switch (action.type) {
    //-- Add to cart
    case 'CART_ADD_ITEM':
      //-- Save the item being added to cart in newItem
      const newItem = action.payload;
      //-- Get exist item based on criteria in ProductScreen
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      //-- If item already existed in cart, update the item with matched id
      //--   with the newItem, and keep the rest the same as previously
      //-- Else, just add the newItem at the end of the array.
      const cartItems = existItem
      ? state.cart.cartItems.map((item) =>
          item._id === existItem._id ? newItem : item
        )
      : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}