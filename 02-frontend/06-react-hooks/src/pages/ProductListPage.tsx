import { useCart } from "../context/CartContext";
import { useCartStore } from "../store/useCartStore";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 79.99, category: "Electronics" },
  { id: 2, name: "USB-C Cable", price: 12.99, category: "Electronics" },
  { id: 3, name: "Coffee Maker", price: 49.99, category: "Appliances" },
  { id: 4, name: "Desk Lamp", price: 34.99, category: "Furniture" },
  { id: 5, name: "Phone Case", price: 19.99, category: "Accessories" },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 129.99,
    category: "Electronics",
  },
];

export default function ProductListPage() {
  const { addToCart, removeFromCart } = useCart();
  const zustandAddToCart = useCartStore((state) => state.addToCart);
  const zustandRemoveFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <main>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            border: "1px solid #ccc",
          }}
        >
          <h3>{product.name}</h3>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <button onClick={() => addToCart(product.id)}>Context (+)</button>
          <button onClick={() => removeFromCart(product.id)}>
            Context (-)
          </button>

          <button onClick={() => zustandAddToCart()}>Zustand (+)</button>
          <button onClick={() => zustandRemoveFromCart()}>Zustand (-)</button>
        </div>
      ))}
    </main>
  );
}
