import { useParams, Link } from "react-router-dom";
import getPosts from "../utils/getPosts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEOHead from "../components/SEOHead";

function Article() {
  const { slug } = useParams();
  const post = getPosts().find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <SEOHead title="Article Not Found" />
        <div className="content-wrap">
          <h1>Article Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      </>
    );
  }

  const description =
    (post.excerpt || post.content || "").replace(/^#+\s*/gm, "").substring(0, 160) + "…";

  return (
    <>
      <SEOHead title={post.title} description={description} />
      <article className="article-page" itemScope itemType="https://schema.org/NewsArticle">
        <header className="article-header">
          <h1 className="article-title" itemProp="headline">
            {post.title}
          </h1>
          <div className="article-meta">
            <time dateTime={post.date} itemProp="datePublished">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </time>
            <Link to={`/category/${post.category}`} className="article-category">
              {post.category}
            </Link>
          </div>
        </header>
        {post.image && (
          <div className="article-image">
            <img src={post.image} alt={post.title} width="800" height="450" />
          </div>
        )}
        <div className="article-body prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </>
  );
}

export default Article;