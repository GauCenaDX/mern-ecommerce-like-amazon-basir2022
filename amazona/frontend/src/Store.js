import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null,

  cart: {
    shippingAddress: localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {},
    paymentMethod: localStorage.getItem('paymentMethod')
    ? localStorage.getItem('paymentMethod') //-- it's only a string, so no JSON.parse is needed
    : '',
    cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
  }
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
      //-- Save cart items in local storage:
      //--   - Convert cartItems to string and store it in a key named cartItems
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };

    case 'CART_REMOVE_ITEM': { //-- Using block to prevent mixing 'cartItems' with the previous case
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'CART_CLEAR':
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    case 'USER_SIGNIN':
      //-- Keep previous state, update userInfo with data from backend
      return { ...state, userInfo: action.payload };

    case 'USER_SIGNOUT':
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {},
          paymentMethod: ''
        }
      };

    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload
        }
      };

    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload
        }
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}