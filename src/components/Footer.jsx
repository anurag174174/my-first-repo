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
            <Link to="/" className="footer-logo">
              News of City
            </Link>
            <p className="footer-tagline">
              Your trusted source for local news, development, and community updates.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <h3 className="footer-heading">Categories</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <Link to={`/category/${cat}`}>{cat}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-legal">
            <h3 className="footer-heading">Legal</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Use</a></li>
              <li><a href="#contact">Contact</a></li>
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
