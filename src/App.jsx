import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 

import "./App.css";
import Navbar from "./componentes/Navbar";
import Sidebar from "./componentes/Sidebar";
import ProductList from "./componentes/ProductList"; 
import Footer from "./componentes/Footer";

import About from "./Pages/About";
import Profile from "./Pages/ProfilePage";

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
        <Routes>
          <Route
            path="/"
            element={<ProductList selectedCategory={selectedCategory} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
