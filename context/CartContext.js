import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = React.createContext([null, () => {}]);

export const CartProvider = (props) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
