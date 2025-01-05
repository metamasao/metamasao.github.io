// third party
import { useParams } from "react-router";

// components
import { Template } from "../components/templates"
import { Article } from "../components/organims/Article";
import { Loading } from "../components/organims/Loading";

// hook
import { useBlogs, useFetch } from "./hook";

// model
import { BlogDirector, ConvertBuilder} from "../../models/Blog";

export const Detail = () => {
  const params = useParams()
  const title = "Virtue and Vector Potential"  
  const filename = typeof params.filename === "string" ? params.filename : ""
  const picturePath = 
    filename === "profile.md"
      ? import.meta.env.VITE_BIO_IMAGE_PATH
      : ""

  const {isLoading, isError, data} = useFetch(filename)  

  if (isError) {
    return (<Template title={title} children={<div>Error...</div>} />)  
  }

  if (isLoading) {
    return (<Template title={title} children={<Loading />} />)  
  }

  const converterBuilder = new ConvertBuilder(data);
  const director = new BlogDirector(converterBuilder)
  const content = director.getHTMLContent()
  const metadata = director.getMetadata()

  return (
    <Template 
      title={title}
      children={
      <Article 
        title={metadata.title}
        picturePath={picturePath} 
        content={content}
        datetime={metadata.datetime} 
        tags={metadata.tags.split(",")}        
      />} 
    />
  )
}
