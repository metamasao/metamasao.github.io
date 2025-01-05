// components
import { Tab } from "../Tab"
import { Card } from "../Card"

// type
import { IBlog } from "../../../../models/Interfaces"

// style
import "./index.scss"

export interface MainProps {
  title: string
  blogs: IBlog[]
  tags: string[]
  onClickTag: (tag: string) => void
  filterByTitleOrSummary: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Main = (props: MainProps) => {
  const {title, blogs, tags, onClickTag, filterByTitleOrSummary} = props;

  return (
    <div className="main__wrapper">      
      <h1 className="main__title">
        {title}
      </h1>
      <div className="main__tab">
        <Tab 
          tags={tags} 
          filterByTag={onClickTag} 
          filterByTitleOrSummary={filterByTitleOrSummary}
        />
      </div>
      <div className="main__cards">
        {blogs.map(blog => (
          <Card 
            title={blog.title}
            datetime={blog.datetime}
            filename={blog.filename}
            content={blog.summary}
            tags={blog.tags.split(",")}
            onClickTag={onClickTag}
          />
        ))}
      </div>
    </div>
  )
}