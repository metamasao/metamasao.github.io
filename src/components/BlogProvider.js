import { useContext, createContext, useState } from "react";

import getTags from "./Tag";
import blogMetadata from "../TestData/metadata.json";

const BlogContext = createContext();
export const useBlogs = () => useContext(BlogContext);

export default function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(blogMetadata);
  const tags = getTags(blogMetadata);

  const filterBlogsByTag = (event) => {
    if (event.target.name === "all") return setBlogs(blogMetadata);
    return setBlogs(blogs.filter(blog => blog.tags.includes(event.target.name)));
  };

  return (
    <BlogContext.Provider value={{ blogs, tags, filterBlogsByTag }} >
      {children}
    </BlogContext.Provider>
  );
}
