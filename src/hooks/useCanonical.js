import { useEffect } from "react";

export default function useCanonical(url) {
  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    link.setAttribute("href", url);

    return () => {
      // optional cleanup
    };
  }, [url]);
}