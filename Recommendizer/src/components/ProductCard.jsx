const ProductCard = ({ product }) => (
  <div className="card h-100 shadow-sm">
    <img src={product.image} className="card-img-top" alt={product.name} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text text-muted">{product.category}</p>
      <div className="mt-auto">
        <p className="text-warning">{'⭐'.repeat(product.rating)}</p>
      </div>
    </div>
  </div>
);

export default ProductCard;
