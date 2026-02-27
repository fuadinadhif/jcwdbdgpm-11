import React, { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount((prev) => {
      return prev + 1;
    });
  }

  function removeFromCart() {
    setCartCount((prev) => {
      return prev - 1;
    });
  }

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
