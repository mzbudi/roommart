import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import waLogo from "../assets/img/WA_Logo.png";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  const categories = ["Semua", "Makanan", "Minuman", "Lain - lain"];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "Semua" || product.category === category;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="px-6 pb-6">
      <div className="sticky top-16 z-40 bg-white pb-4">
        <input
          type="text"
          placeholder="Cari produk..."
          className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto mt-2 pb-1 scrollbar-hide snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`snap-start whitespace-nowrap px-3 py-1 text-sm rounded-md border transition ${
                cat === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Produk */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <a
        href="https://wa.me/6285156593494" // Ganti dengan nomor WhatsApp kamu
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-white border border-green-500 text-green-500 p-3 rounded-full shadow-lg hover:bg-green-100 transition"
      >
        <img src={waLogo} alt="Chat WhatsApp" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default HomePage;
