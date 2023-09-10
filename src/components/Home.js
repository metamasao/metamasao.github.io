import { HeadingH1, HeadingH2 } from "./Heading";
import Author from "./Author";
import BlogList from "./Blog";

export default function Home() {
  return (
    <>
      <HeadingH1 content={"メモメモ"}/>
      <Author />
      <HeadingH2 content={"最近書いた記事（かも）"}/>
      <BlogList lastIndex={3}/>
    </>
  )
}