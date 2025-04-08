import { useCartStore } from "../store/useCartStore";
import { Product } from "../data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover mb-2 rounded"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">Rp{product.price.toLocaleString()}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Tambah ke Keranjang
      </button>
    </div>
  );
};

export default ProductCard;
