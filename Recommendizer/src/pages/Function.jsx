import ProductCard from "../components/ProductCard";

const fakeFunction = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", rating: 4, image: "/assets/headphones.jpg" },
    { id: 2, name: "Yoga Mat", category: "Fitness", rating: 5, image: "/assets/yogamat.jpg" },
    { id: 3, name: "Wireless Headphones", category: "Electronics", rating: 4, image: "/assets/headphones.jpg" },
    { id: 4, name: "Yoga Mat", category: "Fitness", rating: 5, image: "/assets/yogamat.jpg" },
    { id: 5, name: "Wireless Headphones", category: "Electronics", rating: 4, image: "/assets/headphones.jpg" },
    { id: 6, name: "Yoga Mat", category: "Fitness", rating: 5, image: "/assets/yogamat.jpg" },
  ];

const Function = () => (
  <div className="container my-5">
    <h2 className="mb-4">NEW RECOMMENDATIONS</h2>
    <div className="row g-4">
        {fakeFunction.map(product => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
  </div>
);

export default Function;
