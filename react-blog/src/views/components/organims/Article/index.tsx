// components
import { Card } from "../Card"

// style
import "./index.scss"

export interface ArticleProps {
  title: string
  picturePath: string
  content: string
  tags: string[]  
  datetime: string  
}

export const Article = (props: ArticleProps) => {
  const {title, picturePath, content, tags, datetime} = props

  return (
    <div className="article__wrapper">                  
      <Card 
        title={title}        
        datetime={datetime}
        content={content}      
        tags={tags}
        picture={picturePath}        
        isArticle
      />              
    </div>
  )
}