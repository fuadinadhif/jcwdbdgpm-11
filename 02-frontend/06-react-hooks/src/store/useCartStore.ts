import { create } from "zustand";

interface CartStore {
  cartCount: number;
  addToCart: () => void;
  removeFromCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartCount: 0,
  addToCart: () => {
    set((state) => {
      return { cartCount: state.cartCount + 1 };
    });
  },
  removeFromCart: () => {
    set((state) => {
      return { cartCount: state.cartCount - 1 };
    });
  },
}));
