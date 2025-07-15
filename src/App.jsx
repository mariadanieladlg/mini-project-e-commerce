import { useState } from "react";
import initialProducts from "./assets/products.json";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./componentes/Navbar";
import Sidebar from "./componentes/Sidebar";
import ProductList from "./componentes/ProductList";

import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";
import CreateProductForm from "./Pages/CreateProductForm";
import Footer from "./componentes/Footer";
import About from "./Pages/About";
import Profile from "./Pages/ProfilePage";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div className="grid-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="sidebar">
        <Sidebar setSelectedCategory={setSelectedCategory} />
      </div>

      <div className="product-list">
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                selectedCategory={selectedCategory}
                products={products}
              />
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProductDetails products={products} setProducts={setProducts} />
            }
          />

          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/create"
            element={<CreateProductForm addProduct={addProduct} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
