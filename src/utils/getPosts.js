const files = import.meta.glob("../content/posts/*.md", {
    eager: true,
    as: "raw"
  });
  
  const getPosts = () => {
    const posts = [];
  
    for (const path in files) {
      const raw = files[path];
  
      const separatorIndex = raw.indexOf("\n---");
  
      const metaPart = raw.substring(0, separatorIndex).trim();
      const content = raw.substring(separatorIndex + 4).trim();
  
      const metadata = JSON.parse(metaPart);
  
      posts.push({
        ...metadata,
        content
      });
    }
  
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  };
  
  export default getPosts;