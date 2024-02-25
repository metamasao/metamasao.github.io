import { BsTags } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Card } from "../../molecules/Card/Index"
import { useBlog } from "../../contexts/BlogProvider"

import "./tag.scss";
import tagData from "../../../blog-data/tags.json"

export const Tag = () => {
  const {filteredBlogByTag} = useBlog()
  if (!filteredBlogByTag) return <></>;

  const TagTitle = (
    <div className="tag-title">
      <div className="tag-icon">
        <BsTags />
      </div>
      <div className="tag-title">
        Tag
      </div>
    </div>
  )

  const Tags = (
    <div className="tags-wrapper">
      <div 
        className="tag-wrapper"
        onClick={() => filteredBlogByTag("all")}
      >
        <div className="tag-name-aside">
          #all
        </div>
      </div>
      {tagData.map((tag) => (
        <div 
          className="tag-wrapper"
          onClick={() => filteredBlogByTag(tag.tag_name)}
        >
          <div className="tag-name-aside">
          #{tag.tag_name}
        </div>
          <div className="tag-count-aside">
            {tag.tag_count}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <Card 
      title={TagTitle}
      content={Tags} 
      cardClassName="card-link"
    />    
  )
}