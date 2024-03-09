import { useNavigate } from "react-router-dom";
import { BsTags, BsPerson } from "react-icons/bs";

import { SearchForm } from "../../molecules/SearchForm/Index";
import { useBlog } from "../../contexts/BlogProvider";

import "./sidebar.scss";

export type sidebarItems = {
  header: string,
  listContents: {
    tag_name: string,
    tag_count: number
  }[],
}

export interface SidebarProps {
  sidebarState: boolean;
  sidebarItems: sidebarItems[];
}

export const Sidebar = (props: SidebarProps) => {
  const {sidebarState, sidebarItems} = props

  const navigate = useNavigate()
  const {filteredBlogByTag, selectedTag} = useBlog()
  if (!filteredBlogByTag) return <></>;

  const MeAndBlog = (
    <div 
      className="me-and-blog-wrapper"
      onClick={() => navigate("/blog/profile.md")}
    >
      <div className="person-icon">
        <BsPerson />
      </div>
      <div className="me-blog-content">
        Me
      </div>
    </div>
  )

  const TagTitle = (
    <div className="tag-title">
      <div className="tag-icon">
        <BsTags />
      </div>
      <div className="tag-title-content">
        Tag
      </div>
    </div>
  )

  return (
    <div className={sidebarState ? "sidebar-active" : "sidebar-inactive"}>
      <div className="search-form-wrapper">
        <SearchForm searchFormClassName="search-form-block"/>
      </div>
      {sidebarItems.map((item, i) => (
        <div className="sidebar-item" key={i}>
          <div className="sidebar-item-header">
            {MeAndBlog}
          </div>
          <div className="sidebar-item-header">
            {TagTitle}
          </div>
          <div className="sidebar-item-contents">
            <div
              className={selectedTag === "all" ? "sidebar-item-content-selected" : "sidebar-item-content"}
              onClick={() => filteredBlogByTag("all")}
            >
              #all
            </div>
            {item.listContents.map((content, k) => (
              <div 
                className={selectedTag === content.tag_name ? "sidebar-item-content-selected" : "sidebar-item-content"}
                key={k} 
                onClick={() => filteredBlogByTag(content.tag_name)}
              >
                <div className="tag-name">
                  #{content.tag_name}
                </div>
                <div className="tag-count">
                  {content.tag_count}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}