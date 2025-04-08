import { Product } from "../data/products";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-contain mb-2"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
      <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
        Pesan
      </button>
    </div>
  );
};

export default ProductCard;
