import { useState } from "react"

// component
import { Search } from "../../molecules/Search"
import { Tag } from "../../molecules/Tag"

import "./index.scss"

export interface TabProps {
  tags: string[]
  filterByTag: (tag: string) => void
  filterByTitleOrSummary: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Tab = (props: TabProps) => {
  const {tags, filterByTag, filterByTitleOrSummary} = props
  const [tabState, setTabState] = useState<"search" | "tag">("tag")

  const onClickTabIcon = (tab: "search" | "tag") => {
    setTabState(tab)
  }

  return (
    <div className="tab__wrapper">
      <div className="tab__controller">        
        <div 
          className={`tab__controller--tag ${tabState === "tag" ? "tab__controller--active": ""}`}
          onClick={() => onClickTabIcon("tag")}
        >
          tag
        </div>
        <div 
          className={`tab__controller--search ${tabState==="search" ? "tab__controller--active" : ""}`}
          onClick={() => onClickTabIcon("search")}
        >
          search
        </div>
      </div>      
      <div className={`tab__tag${tabState === "tag" ? "--active" : ""}`} >
        <Tag tags={tags} isLink onClickTag={filterByTag}/>
      </div>
      <div className={`tab__search${tabState === "search" ? "--active" : ""}`}>
        <Search filterByTitleOrSummary={filterByTitleOrSummary}/>
      </div>
    </div>
  )
}