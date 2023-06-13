import Badge from "react-bootstrap/Badge";
import { useBlogs } from "./BlogProvider";

export function getTags(metadata) {
  const tagsSet = new Set()
  metadata.forEach(data => {
    let tagsSplitArray = data.tags.split(",");
    tagsSplitArray.forEach(tag => tagsSet.add(tag));
  })
  return [...tagsSet, "all"]
}

export function TagDetail({ tags, filterBlogsByTag }) {
  return (
    <div className="tags-badges my-3">
      {tags.map((tag, i) => (
        <Badge className="mx-1" bg="dark" as={"button"} onClick={filterBlogsByTag} name={tag} key={i}>
          #{tag}
        </Badge>
      ))}
    </div>        
  )
}

export default function Tags() {
  const { blogs, filterBlogsByTag } = useBlogs();
  const tags = getTags(blogs);

  return(
    <TagDetail tags={tags} filterBlogsByTag={filterBlogsByTag}/>
  )
}