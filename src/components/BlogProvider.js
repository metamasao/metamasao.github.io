import { useContext, createContext, useState } from "react";

import blogMetadata from "../metadata.json";

const BlogContext = createContext();
export const useBlogs = () => useContext(BlogContext);

export default function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(blogMetadata);

  const filterBlogsByTag = (event) => {
    setBlogs(blogMetadata);
    if (event.target.name === "all") return ;
    return setBlogs(blogs.filter(blog => blog.tags.includes(event.target.name)));
  };

  return (
    <BlogContext.Provider value={{ blogs, filterBlogsByTag }} >
      {children}
    </BlogContext.Provider>
  );
}
