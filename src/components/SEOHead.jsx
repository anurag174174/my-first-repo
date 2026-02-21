import { useEffect } from "react";

function SEOHead({ title, description, canonical, faqSchema }) {
  useEffect(() => {
    const base = "News of City";

    document.title = title ? `${title} | ${base}` : base;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }

    if (description) {
      metaDesc.setAttribute("content", description);
    }

    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }

    if (canonical) {
      canonicalTag.setAttribute("href", canonical);
    }

    // FAQ SCHEMA
    if (faqSchema) {
      let script = document.querySelector("#faq-schema");

      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "faq-schema";
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(faqSchema);
    }

  }, [title, description, canonical, faqSchema]);

  return null;
}

export default SEOHead;