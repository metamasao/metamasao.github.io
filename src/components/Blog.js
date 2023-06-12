import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link, useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";

import { useBlogs } from "./BlogProvider";
import useFetch from "./CustomHook";
import Tags  from "./Tag";

export default function BlogList({ lastIndex }) {
  const { blogs } = useBlogs();
  const blogLastIndex = lastIndex ? lastIndex : blogs.length;

  return (
    <>
      <h2 className="my-4 mx-3">書いたよ</h2>
      <Tags />
      <div className="blog-list my-3 mx-3">
        {blogs.slice(0, blogLastIndex).map((blog, i) => (
          <Card className="shadow-lg my-4" border="light" key={i}>
            <Card.Body>
              <Card.Title>
                Title: {blog.title}
              </Card.Title>
              <Card.Subtitle className="text-muted my-1">Tags: {blog.tags} Created: {blog.datetime}</Card.Subtitle>
              <Card.Text>
                {blog.summary}
              </Card.Text>
              <Link to={`/blogs/${blog.filename}`}>detail</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export function BlogDetail() {
  let { url } = useParams();
  const { data, error, loading } = useFetch(
    `https://raw.githubusercontent.com/metamasao/metamasao.github.io/main/memo_blog/${url}`,
    false
  )

  console.log(`blog: ${url}`)
  if (error) return console.log(error);
  if (loading) return <Container><ClockLoader /></Container>;

  return (
    <Card className="shadow-lg" border="light">
      <Card.Body>
        <ReactMarkdown remarkPlugins={[remarkFrontmatter]}>
          {data}
        </ReactMarkdown>
        <Link to="/">ホームに戻るよ</Link>
      </Card.Body>
    </Card>
  )
}