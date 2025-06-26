import { useParams } from "react-router-dom";
import products from "../assets/products.json";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Delivery Time:</strong> {product.shippingInformation}</p>
       <p><strong>Availability:</strong> {product.availabilityStatus}</p>

    </div>
  );
}
