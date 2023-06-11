import { useBlogs } from "./BlogProvider";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

export default function BlogList() {
  const { blogs, tags, filterBlogsByTag } = useBlogs();

  return (
    <>
      <h1 className="my-4 mx-3">Blog or something</h1>
      <div className="tags-badges my-4 mx-3">
        {tags.map(tag => (
          <Badge className="mx-1" bg="dark" as={"button"} onClick={filterBlogsByTag} name={tag}>
            {tag}
          </Badge>
        ))}
      </div>
      <div className="blog-list my-3 mx-3">
        {blogs.map(blog => (
          <Card className="shadow-lg my-4" border="light">
            <Card.Body>
              <Card.Title>
                Title: {blog.title}
              </Card.Title>
              <Card.Subtitle className="text-muted my-1">Tags: {blog.tags} Created: {blog.datetime}</Card.Subtitle>
              <Card.Text>
                test test
              </Card.Text>
              <Card.Link href="#">
                {/* ここでmarkdwonでfetchするときのコンポーネントにルーティングする */}
                detail
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}