import { Link } from "react-router-dom";
import getPosts from "../utils/getPosts";

/** Right sidebar: shows 7 latest posts. Used on home page. */
function Sidebar() {
  const latest = getPosts().slice(0, 7);

  return (
    <aside className="sidebar" aria-label="Latest posts">
      <h2 className="sidebar-title">Latest Posts</h2>
      <ul className="sidebar-list">
        {latest.map((post) => (
          <li key={post.slug} className="sidebar-item">
            <Link to={`/article/${post.slug}`} className="sidebar-link">
              {post.image && (
                <span className="sidebar-thumb">
                  <img src={post.image} alt=""  />
                </span>
              )}
              <span className="sidebar-text">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
