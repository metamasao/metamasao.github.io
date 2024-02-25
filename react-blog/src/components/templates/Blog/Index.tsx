import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";
import { useParams } from "react-router-dom";

import { Card } from "../../molecules/Card/Index";
import { BaseTemplate } from "../BaseTemplate";
import { useFetch } from "../../../pages/hooks/useFetch";

import "./blog.scss";

export const Blog = () => {
  const { filename } = useParams()
  const {data, error, isLoading} = useFetch(filename as string)

  if (isLoading) {
    return (
      <div className="loading-animation-wrapper">
        <div className="loading-animation"></div>
      </div>
    )
  }

  const BlogDetailContent = (
    <ReactMarkdown
      rehypePlugins={[remarkFrontmatter]}
      components={{
        blockquote: ({node, ...props}) => <blockquote style={{backgroundColor: "rgb(180, 180, 210)", color: "rgb(10, 10, 30)", borderRadius: "10px", padding: "10px 10px", margin: "5px 2px", fontStyle: "italic"}} {... props}/>,
        pre: ({node, ...props}) => <pre style={{backgroundColor: "black", color: "white", borderRadius: "5px", padding: "10px 10px"}} {...props}/>
      }}
    >
      {data}
    </ReactMarkdown>
  )

  return (
    <BaseTemplate>
      <Card content={BlogDetailContent} cardClassName="card-link" homeLink={true}/>
    </BaseTemplate>
  )
}