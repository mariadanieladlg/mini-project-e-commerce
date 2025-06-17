import { useState } from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Sidebar from "./componentes/Sidebar";
import ProductList from "./componentes/ProductList"; // <-- Corrigido aqui!
import Footer from "./componentes/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="grid-container">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="sidebar">
        <Sidebar setSelectedCategory={setSelectedCategory} />
      </div>

      <div className="product-list">
        <ProductList selectedCategory={selectedCategory} />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
