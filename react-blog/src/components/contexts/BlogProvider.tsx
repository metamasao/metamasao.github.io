import { useState, useContext, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import blogMetaData from "../../blog-data/metadata.json"

export type BlogType = {
  title: string,
  filename: string,
  summary: string,
  tags: string,
  datetime: string,
}

export type BlogContextType = {
  blog?: BlogType[],
  selectedTag?: string,
  filteredBlogByTag?: (tag: string) => void,
  filteredBlogByTitle?: (inputRef: HTMLInputElement | null) => void;
}

const BlogContext = createContext<BlogContextType>({})
export const useBlog = () => useContext(BlogContext)

export const BlogProvider = (props: {children: JSX.Element}) => {
  const { children } = props

  const [blog, setBlog] = useState<BlogType[]>(blogMetaData);
  const [selectedTag, setSelectedTag] = useState<string>("")
  const location = useLocation()
  const navigate = useNavigate()

  const filteredBlogByTag = (tag: string):void => {
    if (tag === "all") {
      setBlog(blogMetaData)
      setSelectedTag("all")
    } else {
      const filteredBlogByTag = blogMetaData.filter((blog) => blog.tags.split(",").includes(tag))
      setBlog(filteredBlogByTag)
      setSelectedTag(tag)
    }

    if (location.pathname !== "/") {
      navigate("/")
      return;
    }
    return;
  }

  const filteredBlogByTitle = (inputRef: HTMLInputElement | null): void => {
    if (!inputRef) return;
    if (inputRef.value === "") {
      setBlog(blogMetaData)
    } else {
      const filteredBlogByTitle = blogMetaData.filter((blog) => blog.title.includes(inputRef.value));
      inputRef.value = "";
      setBlog(filteredBlogByTitle)
    }

    if (location.pathname !== "/") {
      navigate("/")
      return;
    }
    return;
  }

  return (
    <BlogContext.Provider value={{blog, selectedTag, filteredBlogByTag, filteredBlogByTitle}}>
      {children}
    </BlogContext.Provider>
  )
}
