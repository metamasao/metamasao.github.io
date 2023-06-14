import Author from "./Author";
import BlogList from "./Blog";

export default function Home() {
  return (
    <>
      <Author />
      <BlogList lastIndex={3}/>
    </>
  )
}