import { useState, useContext } from "react";

import { Nav } from "../../organisms/Nav/Index";
import { Card } from "../../molecules/Card/Index";
import { Main} from "../../organisms/Main/Index";
import { Sidebar } from "../../organisms/Sidebar/Index";
import { Footer } from "../../organisms/Footer/Index";
import { BaseTemplate } from "../BaseTemplate";
import { useBlog } from "../../contexts/BlogProvider";

import { useSidebar } from "../../organisms/Sidebar/hook";
import { useFetch } from "../../../pages/hooks/useFetch";


import "./home-template.scss";

export type BlogType = {
  title: string,
  filename: string,
  summary: string,
  tags: string,
  datetime: string,
}


export const HomeTemplate = () => {
  const {blog} = useBlog()
  if (!blog) return <></>;
 
  return (
    <BaseTemplate 
      children={<Main mainContents={blog}/>} 
      />
  )
}