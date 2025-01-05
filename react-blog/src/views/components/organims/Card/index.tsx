import { useState } from "react"

// third party
import { useNavigate } from "react-router"

// components
import { Tag } from "../../molecules/Tag"

import "./index.scss"

export interface CardProps {
  title: string
  tags: string[]
  datetime: string
  filename?: string
  content: string
  picture?: string
  isArticle?: boolean
  onClickTag?: (tag: string) => void  
}

export const Card = (props: CardProps) => {
  const {title, datetime, filename, content, picture, isArticle, tags, onClickTag} = props;
  const navigate = useNavigate()
  const [isTouch, setIsTouch] = useState<boolean>(false);
  const cardClassName: string = [
    isArticle ? "card__article" : "card",
    isTouch ? "card__touched" : ""
  ].join(" ")

  const onClickCard = () => {
    if (typeof filename === "string") {
      navigate(filename)
    }    
  }

  return (
    <div 
      className={cardClassName} 
      onTouchStart={() => {setIsTouch(!isTouch)}}
      onClick={() => onClickCard()}
      >
      <div className="card__header">
        <div className="card__title">{title}</div>
        <div className="card__datetime">{datetime}</div>        
      </div>
      <div className="card__tag card__item">
        <Tag tags={tags} onClickTag={onClickTag} isLink={!isArticle}/>
      </div>

      <div className="card__content card__item">        
        {picture && (
          <div className="card__content--picture__wrapper">
            <img className="card__content--picture" src={`${picture}`} alt="not available..." />            
          </div>
        )}
        <div className="card__content--body" dangerouslySetInnerHTML={{ __html: content}} />        
      </div>
      {isArticle && (
        <div className="card__footer card__item" onClick={() => navigate("/")}>
          back
        </div>
      )}
    </div>
  )
}