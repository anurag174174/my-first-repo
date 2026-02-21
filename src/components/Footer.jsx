import { Link } from "react-router-dom";
import getPosts from "../utils/getPosts";

function Footer() {
  const categories = [...new Set(getPosts().map((p) => p.category))];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className=" nav-logo" >
            <img
              src="./src/assets/logos.png"
              alt="News of City Logo"
              className="nav-logo-img"
            />
            </Link>
            <p className="footer-tagline">
  News of City is your trusted source for local news, city updates, development stories, and community coverage that keeps you informed daily.
</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <h3 className="footer-heading">Categories</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {categories.slice(0, 5).map((cat) => (
  <li key={cat}>
    <Link to={`/category/${cat}`}>{cat}</Link>
  </li>
))}
            </ul>
          </nav>

          <div className="footer-legal">
            <h3 className="footer-heading">Legal</h3>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} News of City. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
