import { createContext, useContext } from "react";

export interface CartContextType {
  cartCount: number;
  addToCart: () => void;
  removeFromCart: () => void;
}

export const CartContext = createContext<null | CartContextType>(null);

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
