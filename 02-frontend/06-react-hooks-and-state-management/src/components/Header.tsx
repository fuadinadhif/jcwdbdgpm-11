import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { useCartStore } from "../store/useCartStore";

export default function Header() {
  const { cartCount } = useCart();
  const zustandCartCount = useCartStore((state) => state.cartCount);

  return (
    <header>
      <h1>LOGO</h1>
      <nav>
        <ul>
          <li>
            <Link to="product-list">Product List</Link>
          </li>
          <li>
            <Link to="prop-drilling">Prop Drilling</Link>
          </li>
          <li>
            <Link to="react-context">React Context</Link>
          </li>
          <li>
            <Link to="use-state">Use State</Link>
          </li>
          <li>
            <Link to="use-effect">Use Effect</Link>
          </li>
          <li>
            <Link to="session-storage">Session Storage</Link>
          </li>
        </ul>
      </nav>

      <div>
        <h2>🛒 Context Shop</h2>
        <p>Items in cart: {cartCount}</p>
      </div>
      <div>
        <h2>🛒 Zustand Shop</h2>
        <p>Items in cart: {zustandCartCount}</p>
      </div>
    </header>
  );
}
