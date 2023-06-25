import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

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
      <HeadingH2 content={"書いた"}/>
      <Tags />
      <div className="blog-list">
        {blogs.slice(0, blogLastIndex).map((blog, i) => (
          <BlogListCard blog={blog} key={i}/>
        ))}
      </div>
    </div>
  )
}

export function BlogListCard({ blog }) {
  return (
    <LightCard>
      <CardTitle title={blog.title} />
      <CardSubtitle tags={blog.tags} created={blog.datetime.slice(0, 10)}/>
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
      <CardText>
        <ReactMarkdown 
          rehypePlugins={[remarkFrontmatter]} 
          components={{
            blockquote: ({node, ...props}) => <blockquote style={{backgroundColor: "#eeeeee", borderRadius: "10px", padding: "10px 10px", margin: "5px 2px", boxShadow: "5px 5px 10px #cccccc", fontStyle: "italic"}} {... props}/>,
            pre: ({node, ...props}) => <pre style={{backgroundColor: "black", color: "white", borderRadius: "5px", padding: "10px 10px", boxShadow: "5px 5px 5px gray"}} {...props}/>
          }}
        >
          {data}
        </ReactMarkdown>
      </CardText>
      <Link to="/">ホームに戻るよ</Link>
    </LightCard>
  )
}