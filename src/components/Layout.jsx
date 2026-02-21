import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import getPosts from "../utils/getPosts";
import Footer from "./Footer";

function Layout({ children }) {
  const posts = getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCategoryOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const closeAll = () => {
    setCategoryOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <div className="layout">
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <Link to="/" className="nav-logo" onClick={closeAll}>
            <img
              src="./src/assets/logos.png"
              alt="News of City Logo"
              className="nav-logo-img"
            />
          </Link>

          <button
            type="button"
            className="nav-mobile-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="nav-menu"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            <span className="nav-mobile-toggle-bar" />
            <span className="nav-mobile-toggle-bar" />
            <span className="nav-mobile-toggle-bar" />
          </button>

          <ul id="nav-menu" className="nav-links" data-open={mobileMenuOpen}>
            <li>
              <Link to="/" onClick={closeAll}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeAll}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeAll}>Contact</Link>
            </li>
            <li className="nav-dropdown-wrap" ref={dropdownRef} data-open={categoryOpen}>
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={categoryOpen}
                aria-haspopup="true"
                aria-label="Category menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setCategoryOpen((o) => !o);
                }}
              >
                Category
                <span className="nav-dropdown-arrow" aria-hidden>▼</span>
              </button>
              <ul
                className="nav-dropdown"
                role="menu"
                data-open={categoryOpen}
                hidden={!categoryOpen}
              >
                {categories.map((category) => (
                  <li key={category} role="none">
                    <Link
                      to={`/category/${category}`}
                      role="menuitem"
                      onClick={closeAll}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;