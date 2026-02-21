import { useEffect } from "react";

/**
 * Updates document title and meta description for SEO.
 * Use on every page for better search visibility.
 */
function SEOHead({ title, description }) {
  useEffect(() => {
    const base = "News of City";
    document.title = title ? `${title} | ${base}` : base;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (description && metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    return () => {
      document.title = `${base} – Local News & Updates`;
      if (metaDesc) metaDesc.setAttribute("content", "Your trusted source for local news, development updates, politics, and sports.");
    };
  }, [title, description]);

  return null;
}

export default SEOHead;
