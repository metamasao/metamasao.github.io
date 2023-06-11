export default function getTags(metadata) {
  const tagsSet = new Set()
  metadata.forEach(data => {
    let tagsSplitArray = data.tags.split(",");
    tagsSplitArray.forEach(tag => tagsSet.add(tag));
  })
  return [...tagsSet, "all"]
}