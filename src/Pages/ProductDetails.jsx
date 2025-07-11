import { useParams, useNavigate } from "react-router-dom";
import productList from "../assets/products.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = productList.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

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
        alert("Product Removed!");
        navigate("/");
      }
    }
  };

  if (!product) {
    return <p>Product Not Found!</p>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Delivery Time:</strong> {product.shippingInformation}
      </p>
      <p>
        <strong>Availability:</strong> {product.availabilityStatus}
      </p>

      <div className="quantity-controls">
        <p>
          <strong>Quantity:</strong> {quantity}
        </p>
        <div className="quantity-buttons">
          <button onClick={handleIncrease}>Add</button>
          <button onClick={handleDecrease}>Delete</button>
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
