// components
import { Template } from "../components/templates"
import { Main } from "../components/organims/Main";

import { useBlogs } from "./hook";

// tag helper
import { Tags } from "../../models/Blog";

export const Index = () => {
  const title = "Virtue and Vector Potential"  
  const {blogs, filterByTag, filterByTitleOrSummary} = useBlogs()
  const tag = new Tags(blogs)
  const tags = ["all", ...tag.list()]

  return (
    <Template 
      title={title} 
      children={
      <Main 
        title={title} 
        blogs={blogs} 
        tags={tags} 
        onClickTag={filterByTag}
        filterByTitleOrSummary={filterByTitleOrSummary}
      />} 
    />
  )
}