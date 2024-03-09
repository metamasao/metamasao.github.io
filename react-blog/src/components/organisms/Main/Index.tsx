import { Card } from "../../molecules/Card/Index";
import { ContentsGrid } from "../../layouts/Grid/Index";
import { useCardNavigate } from "../../molecules/Card/hook";
import { BlogType } from "../../contexts/BlogProvider";

import "./main.scss";

export interface MainProps {
  mainContents: BlogType[]
}

export const Main = (props: MainProps) => {
  const {mainContents} = props
  const onClick = useCardNavigate("blog")

  const contents = new Array(mainContents.length)
  for (let i = 0; i < mainContents.length; i++) {
    contents[i] = (
      <Card 
        title={mainContents[i].title} 
        content={mainContents[i].summary} 
        datetime={mainContents[i].datetime} 
        onClick={() => onClick(mainContents[i].filename)}/>
    )
  }

  return (
    <ContentsGrid contents={contents}/>
  )
}
