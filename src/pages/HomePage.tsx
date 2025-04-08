import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const HomePage = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Cari produk..."
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
