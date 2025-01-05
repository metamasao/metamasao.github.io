import { useState, useEffect } from "react";

import { IBlog } from "../../models/Interfaces";

// 開発環境: mock_db 本番環境: blog_data
// import blogsMetadata from "../../../mock_db/metadata.json"
import blogsMetadata from "../../../blog_data/metadata.json"

export interface ReturnTypeUseBlogs {
  blogs: IBlog[]
  filterByTag: (tag: string) => void
  filterByTitleOrSummary: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>(blogsMetadata as IBlog[])  

  const filterByTag = (tag: string) => {
    const blogs = blogsMetadata as IBlog[]
    if (tag === "all") {
      return setBlogs(blogs)  
    }

    setBlogs(blogs.filter(blog => blog.tags.includes(tag)))
  }

  const filterByTitleOrSummary = (event: React.ChangeEvent<HTMLInputElement>) => {    
    const inputValue = event.target.value
    const blogs = blogsMetadata as IBlog[]
    if (inputValue === "") {
      return setBlogs(blogsMetadata)
    }

    setBlogs(blogs.filter(blog => (
      blog.title.includes(inputValue) || blog.summary.includes(inputValue)
    )))
  }

  return {
    blogs: blogs,
    filterByTag: filterByTag,
    filterByTitleOrSummary: filterByTitleOrSummary
  }
}

interface ReturnTypeUseFetch {
  isLoading: boolean
  isError: boolean
  data: string
}

export const useFetch = (filename: string): ReturnTypeUseFetch => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState("")
  
  const fetchBlogData = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) {
      return setIsError(true)      
    }

    const responseContent = await response.text()
    setIsLoading(false);
    setData(responseContent);
  }

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_GITHUB_RAW_URL
    fetchBlogData(`${baseUrl}${filename}`);
  }, [])

  return {isLoading: isLoading, isError: isError, data: data}
}
