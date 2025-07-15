import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetails({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const productIndex = products.findIndex((p) => p.id === Number(id));
  const product = products[productIndex];

  const [quantity, setQuantity] = useState(1);

  // Estado para modo edición
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedProducts = [...products];
    updatedProducts[productIndex] = editedProduct;
    setProducts(updatedProducts);
    setIsEditing(false);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      const confirmDelete = window.confirm(
        "Would you like to remove the product?"
      );
      if (confirmDelete) {
        const updated = products.filter((p) => p.id !== Number(id));
        setProducts(updated);
        navigate("/");
      }
    }
  };

  if (!product) {
    return <p>Product Not Found!</p>;
  }

  return (
    <div className="product-details">
      <h2>{editedProduct.title}</h2>
      <img src={editedProduct.thumbnail} alt={editedProduct.title} />

      {isEditing ? (
        <>
          <label>
            Title:
            <input
              name="title"
              value={editedProduct.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={editedProduct.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Availability:
            <input
              name="availabilityStatus"
              value={editedProduct.availabilityStatus}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSave} className="profile-btn">
            Save Changes
          </button>
        </>
      ) : (
        <>
          <p>
            <strong>Category:</strong> {editedProduct.category}
          </p>
          <p>
            <strong>Description:</strong> {editedProduct.description}
          </p>
          <p>
            <strong>Delivery Time:</strong> {editedProduct.shippingInformation}
          </p>
          <p>
            <strong>Availability:</strong> {editedProduct.availabilityStatus}
          </p>
        </>
      )}

      <div className="quantity-controls">
        <p>
          <strong>Quantity:</strong> {quantity}
        </p>
        <div className="quantity-buttons">
          <button onClick={handleIncrease}>Add</button>
          <button onClick={handleDecrease}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      </div>

      <div className="back-button">
        <Link to="/" className="button">
          Back
        </Link>
      </div>
    </div>
  );
}
