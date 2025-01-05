// components
import { Template } from "../components/templates"
import { Main } from "../components/organims/Main";

// hook, type
import { useBlogs } from "./hook";
import { IBlog } from "../../models/Interfaces";

// 開発環境: mock_db 本番環境: blog_data
// import blogsMetadata from "../../../mock_db/metadata.json"
import blogsMetadata from "../../../blog_data/metadata.json"

// tag helper
import { Tags } from "../../models/Blog";

export const Index = () => {
  const title = "Virtue and Vector Potential"  
  const {blogs, filterByTag, filterByTitleOrSummary} = useBlogs()
  const tag = new Tags(blogsMetadata as IBlog[])
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