import { useParams, Link } from "react-router-dom";
import getPosts from "../utils/getPosts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEOHead from "../components/SEOHead";
import Sidebar from "../components/Sidebar";

function Article() {
  const { slug } = useParams();
  const post = getPosts().find((p) => p.slug === slug);

  // HANDLE NOT FOUND FIRST (IMPORTANT)
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

  // DYNAMIC CANONICAL URL
  const canonicalUrl = `https://newsofcity.com/${post.slug}`;

  // DYNAMIC DESCRIPTION
  const description =
    (post.excerpt || post.content || "")
      .replace(/^#+\s*/gm, "")
      .substring(0, 160) + "…";

  // DYNAMIC FAQ SCHEMA GENERATION
  const faqSchema = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {/* SEO HEAD */}
      <SEOHead
        title={post.title}
        description={description}
        canonical={canonicalUrl}
        faqSchema={faqSchema}
      />

      {/* Same layout as Home: main + sticky sidebar */}
      <div className="home-page">
        <div className="home-main">
          {/* ARTICLE */}
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
                    day: "numeric",
                  })}
                </time>

                <Link to={`/category/${post.category}`} className="article-category">
                  {post.category}
                </Link>
              </div>
            </header>

            {/* FEATURED IMAGE */}
            {post.image && (
              <div className="article-image">
                <img
                  src={post.image}
                  alt={post.title}
                  width="800"
                  height="450"
                  itemProp="image"
                />
              </div>
            )}

            {/* CONTENT */}
            <div className="article-body prose" itemProp="articleBody">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* FAQ SECTION (VISIBLE ON PAGE — VERY IMPORTANT FOR GOOGLE) */}
            {post.faq && post.faq.length > 0 && (
              <section className="faq-section">
                <h2>Frequently Asked Questions</h2>

                {post.faq.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </section>
            )}
          </article>
        </div>

        <Sidebar />
      </div>
    </>
  );
}

export default Article;