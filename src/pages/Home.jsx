import getPosts from "../utils/getPosts";
import { Link } from "react-router-dom";
import { useState } from "react";
import SEOHead from "../components/SEOHead";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
const POSTS_PER_PAGE = 5;

function Home() {
  const sortedPosts = getPosts();
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";

    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is NewsOfCity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NewsOfCity provides latest updates, guides, and helpful information about government services and online processes."
          }
        },
        {
          "@type": "Question",
          "name": "Is NewsOfCity free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all content on NewsOfCity is completely free to access."
          }
        }
      ]
    });

    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);
  return (
    <>
      <SEOHead
        title="Home"
        description="Latest local news, development updates, politics, and sports from News of City. Stay informed with top stories."
      />
      <div className="home-page">
        <div className="home-main">
          <header className="page-header">
            <h1 className="page-title">Latest News</h1>
            <p className="page-lead">
              Stay updated with the most important stories from your city.
            </p>
          </header>

          <section className="post-list" aria-label="Latest articles">
            {currentPosts.map((post) => (
              <article
                key={post.slug}
                className="post-card"
                itemScope
                itemType="https://schema.org/NewsArticle"
              >
                <Link to={`/article/${post.slug}`} className="post-card-link">
                  {post.image && (
                    <div className="post-card-image">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        width="400"
                        height="220"
                      />
                    </div>
                  )}
                  <div className="post-card-body">
                    <h2 className="post-card-title">
                      <span itemProp="headline">{post.title}</span>
                    </h2>
                    <p className="post-card-excerpt">
                      {(post.excerpt || post.content || "").replace(/^#+\s*/gm, "").substring(0, 140)}…
                    </p>
                    <footer className="post-card-meta">
                      <time dateTime={post.date} itemProp="datePublished">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric"
                        })}
                      </time>
                      <Link to={`/category/${post.category}`} className="post-category">
                        {post.category}
                      </Link>
                    </footer>
                  </div>
                </Link>
              </article>
            ))}
          </section>

          {totalPages > 1 && (
            <nav className="pagination" aria-label="Posts pagination">
              <button
                type="button"
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
              <span className="pagination-info">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                className="pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </nav>
          )}
        </div>

        <Sidebar />
      </div>
    </>
  );
}

export default Home;