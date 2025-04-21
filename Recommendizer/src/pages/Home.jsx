import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center my-5">
      <h1 className="display-3 fw-bold">Welcome to Recommendizer!</h1>
      <p className="lead text-muted">
        Your one-stop shop for personalized recommendations 🎯
      </p>
      <button
        className="btn btn-primary btn-lg mt-4"
        onClick={() => navigate("/function")}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
