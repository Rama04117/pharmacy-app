// JavaScript source code
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="a">
        <h1 className="title">Pharmacy App</h1>
        <ul>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/login">Login</Link></li>
          <li><Link className="link" to="/register">Register</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;