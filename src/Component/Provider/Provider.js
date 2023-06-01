import React, { useContext, useReducer } from "react";
import reducer from "./Reducer";
const Cart = React.createContext();
const CartDispatcher = React.createContext();
const CartProvider = ({ children }) => {
    const initialValue={cart:[],
    total:0}
    const [cart, dispatch] = useReducer(reducer, initialValue);
    return (
      <Cart.Provider value={cart}>
        <CartDispatcher.Provider value={dispatch}>
          {children}
        </CartDispatcher.Provider>
      </Cart.Provider>
    );
  };
  export default CartProvider;
export const useCart = () => useContext(Cart);
export const useCartAction = () => {
  return useContext(CartDispatcher);
};
