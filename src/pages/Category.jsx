import { useParams, Link } from "react-router-dom";
import getPosts from "../utils/getPosts";
import SEOHead from "../components/SEOHead";

function Category() {
  const { name } = useParams();
  const filteredPosts = getPosts().filter((post) => post.category === name);

  if (filteredPosts.length === 0) {
    return (
      <>
        <SEOHead title={`Category: ${name}`} />
        <div className="content-wrap">
          <h1>Category: {name}</h1>
          <p>No posts found in this category.</p>
        </div>
      </>
    );
  }

  const title = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <SEOHead
        title={title}
        description={`Latest ${title} news and stories from News of City.`}
      />
      <div className="content-wrap">
        <header className="page-header">
          <h1 className="page-title">Category: {title}</h1>
        </header>
        <section className="post-list" aria-label="Articles">
          {filteredPosts.map((post) => (
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
                      alt=""
                      loading="lazy"
                      width="280"
                      height="160"
                    />
                  </div>
                )}
                <div className="post-card-body">
                  <h2 className="post-card-title" itemProp="headline">
                    {post.title}
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
                    <span className="post-category">{post.category}</span>
                  </footer>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

export default Category;