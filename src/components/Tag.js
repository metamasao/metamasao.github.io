import Badge from "react-bootstrap/Badge";
import { useBlogs } from "./BlogProvider";

function getTags(metadata) {
  const tagsSet = new Set()
  metadata.forEach(data => {
    let tagsSplitArray = data.tags.split(",");
    tagsSplitArray.forEach(tag => tagsSet.add(tag));
  })
  return [...tagsSet, "all"]
}

export default function Tags() {
  const { blogs, filterBlogsByTag } = useBlogs();
  const tags = getTags(blogs);

  return(
    <div className="tags-badges my-4 mx-3">
      {tags.map((tag, i) => (
        <Badge className="mx-1" bg="dark" as={"button"} onClick={filterBlogsByTag} name={tag} key={i}>
          #{tag}
        </Badge>
      ))}
    </div>
  )
}