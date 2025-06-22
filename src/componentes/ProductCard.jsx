export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-img"
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
       <button>View</button>
     
    </div>
  );
}
