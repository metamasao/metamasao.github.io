import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useSidebar } from "../organisms/Sidebar/hook";
import { Nav } from "../organisms/Nav/Index";
import { Sidebar, sidebarItems } from "../organisms/Sidebar/Index";
import { Card } from "../molecules/Card/Index";
import { Tag } from "../organisms/Tag/Index";
import { Footer } from "../organisms/Footer/Index";

import "./base-template.scss";
import blogTagsData from "../../blog-data/tags.json";
import picture from "../../blog-data/img/metamasao.png"

const sidebarContents = [
  {
    header: "Tags",
    listContents: blogTagsData
  },
]

export interface BaseTemplateProps {
  children: JSX.Element;
  // sidebarContents: sidebarItems[];
}

export const BaseTemplate = (props: BaseTemplateProps) => {
  const { children } = props
  const {sidebarState, onClickSidebar} = useSidebar();

  const AuthorCardDetail = (
    <div className="author-card-detail">
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

  return (
    <div className="page-grid">
      <div className="grid-header">
        <Nav title="Obsessed" onSidebarClick={onClickSidebar}/>
      </div>
      <div className="grid-container">
        <Sidebar 
          sidebarItems={sidebarContents} 
          sidebarState={sidebarState} 
          // onClickTag={onClickTag}
          />
        <div className="main-wrapper">
          {children}  
        </div>
        <div className="grid-sidebar">
          <div className="grid-sidebar-author">
            <Card title="metamasao" content={AuthorCardDetail} img={picture} cardClassName="card-link"/>  
          </div>
          <div className="grid-sidebar-tags">
            <Tag />
          </div>
        </div>
      </div>
      <div className="grid-footer">
        <Footer />
      </div>
    </div>
  )
}