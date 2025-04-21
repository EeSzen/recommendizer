import ProductCard from "../components/ProductCard";

const fakeRecommendations = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", rating: 4, image: "/assets/headphones.jpg" },
  { id: 2, name: "Yoga Mat", category: "Fitness", rating: 5, image: "/assets/yogamat.jpg" },
  // Add more fake products
];

const Recommendations = () => (
  <div className="container my-5">
    <h2 className="mb-4">Top Picks for You</h2>
    <div className="row g-4">
      {fakeRecommendations.map(product => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </div>
);

export default Recommendations;
