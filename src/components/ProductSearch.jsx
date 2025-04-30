// src/components/ProductSearch.jsx
import React, { useState } from "react";
import { products } from "../data/products";

const getCategoryColor = (category) => {
  switch (category) {
    case "Gadget":
      return "bg-blue-100 text-blue-700";
    case "Fashion":
      return "bg-purple-100 text-purple-700";
    case "Sport":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const ProductSearch = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search product..."
        className="w-full p-3 mb-6 rounded border"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-2 text-gray-500">
            Produk tidak ditemukan.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded border shadow-sm flex flex-col gap-2"
            >
              <span
                className={`text-xs font-medium px-2 py-1 rounded w-fit ${getCategoryColor(
                  product.category
                )}`}
              >
                {product.category}
              </span>
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
