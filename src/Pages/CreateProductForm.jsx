import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateProductForm({ addProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      id: Date.now().toString(), // ID único
      price: parseFloat(formData.price),
    };

    addProduct(newProduct);
    navigate("/"); // Redirige a la home después de agregar
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="image"
            required
            value={formData.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            required
            step="0.01"
            value={formData.price}
            onChange={handleChange}
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="profile-btn">
          Add Product
        </button>

        <Link to="/" className="profile-btn">
          Back
        </Link>
      </form>
    </div>
  );
}

export default CreateProductForm;
