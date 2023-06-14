import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";

import { LightCard, CardTitle, CardSubtitle, CardText } from "./Card";
import { useBlogs } from "./BlogProvider";
import { HeadingH2 } from "./Heading";
import useFetch from "./CustomHook";
import Loader from "./Loader";
import Tags  from "./Tag";

export default function BlogList({ lastIndex }) {
  const { blogs } = useBlogs();
  const blogLastIndex = lastIndex ? lastIndex : blogs.length;

  return (
    <div className="blog">
      <HeadingH2 content={"書いたよ"}/>
      <Tags />
      <div className="blog-list my-3">
        {blogs.slice(0, blogLastIndex).map((blog, i) => (
          <BlogListCard blog={blog} key={i}/>
        ))}
      </div>
    </div>
  )
}

export function BlogListCard({ blog, key }) {
  return (
    <LightCard key={key}>
      <CardTitle title={blog.title} />
      <CardSubtitle tags={blog.tags} created={blog.created}/>
      <CardText children={blog.summary}/>
      <Link to={`/blogs/${blog.filename}`}>読む</Link>
    </LightCard>
  )
}

export function BlogDetail() {
  let { url } = useParams();
  const { data, error, loading } = useFetch(
    `https://raw.githubusercontent.com/metamasao/metamasao.github.io/main/memo_blog/${url}`,
    false
  )

  if (error) return console.log(error);
  if (loading) return <Loader />;

  return (
    <LightCard>
      <CardText><ReactMarkdown rehypePlugins={[remarkFrontmatter,]}>{data}</ReactMarkdown></CardText>
      <Link to="/">ホームに戻るよ</Link>
    </LightCard>
  )
}