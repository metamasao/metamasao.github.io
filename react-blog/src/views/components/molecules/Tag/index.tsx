import "./index.scss"

export interface TagProps {
  tags: string[]
  isLink?: boolean
  onClickTag?: (tag: string) => void
}

export const Tag = (props: TagProps) => {
  const {tags, isLink, onClickTag} = props;

  return (
    <div className="tag__wrapper">
      {tags.map((tag, i) => (
        <div 
          key={i} 
          className={`tag__item ${isLink ? " tag__link" : ""}`} 
          onClick={onClickTag && (() => onClickTag(tag))}
        >#{tag}</div>
      ))}
    </div>
  )
}