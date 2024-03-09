import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsTags, BsGithub } from "react-icons/bs";

import { Card } from "../../molecules/Card/Index";
import { SearchForm } from "../../molecules/SearchForm/Index";
import { useBlog } from "../../contexts/BlogProvider";

import picture from "../../../blog-data/img/metamasao.png";
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
    <div className="sidebar-me">
      <p>形而上学、数学、生物学の哲学、物理、プログラミングが好き。</p>
      <div className="profile-link">
        <Link to="/blog/profile.md">Detail</Link>
      </div>
      <div className="gh-link">
        <div className="gh-icon">
          <BsGithub />  
        </div>
        <div className="gh-text">
          <a href="https://github.com/metamasao">Github</a>
        </div>
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
          <div className="sidebar-item">
            <Card title="metamasao" content={MeAndBlog} img={picture} cardClassName="card-link"/>
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