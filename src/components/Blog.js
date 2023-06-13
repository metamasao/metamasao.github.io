import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";

import { useBlogs } from "./BlogProvider";
import { HeadingH2 } from "./Heading";
import useFetch from "./CustomHook";
import Loader from "./Loader";
import Tags  from "./Tag";

export default function BlogList({ lastIndex }) {
  const { blogs } = useBlogs();
  const blogLastIndex = lastIndex ? lastIndex : blogs.length;

  return (
    <>
      <HeadingH2 content={"書いたよ"}/>
      <Tags />
      <div className="blog-list my-3">
        {blogs.slice(0, blogLastIndex).map((blog, i) => (
          <BlogListCard blog={blog} key={i}/>
        ))}
      </div>
    </>
  )
}

export function BlogListCard({ blog, key }) {
  return (
    <Card className="shadow-lg my-3" border="light" key={key}>
      <Card.Body>
        <Card.Title>
          Title: {blog.title}
        </Card.Title>
        <Card.Subtitle className="text-muted my-1">Tags: {blog.tags} Created: {blog.datetime}</Card.Subtitle>
        <Card.Text>
          {blog.summary}
        </Card.Text>
        <Link to={`/blogs/${blog.filename}`}>読む</Link>
      </Card.Body>
    </Card>
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
    <Card className="shadow-lg my-3" border="light">
      <Card.Body>
        <ReactMarkdown remarkPlugins={[remarkFrontmatter]}>
          {data}
        </ReactMarkdown>
        <Link to="/">ホームに戻るよ</Link>
      </Card.Body>
    </Card>
  )
}