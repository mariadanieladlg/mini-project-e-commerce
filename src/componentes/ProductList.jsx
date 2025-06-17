import products from "../assets/products.json";
import ProductCard from "./ProductCard";

export default function ProductList({ selectedCategory }) {
  const filteredProducts = selectedCategory
    ? products.filter((item) => item.category === selectedCategory)
    : products;

  return (
    <section className="product-list-section">
      <h2 className="product-list-title">
        {selectedCategory ? `Category: ${selectedCategory}` : "All Products"}
      </h2>
      <ul className="product-grid">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
