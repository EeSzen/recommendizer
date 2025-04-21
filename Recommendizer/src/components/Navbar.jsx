import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Recommendizer</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recommendations">Recommendations</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
