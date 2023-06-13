import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { TagDetail } from "../components/Tag";
import { getTags } from "../components/Tag";

const tags = ["tag1", "tag2"]

test("render custom tag detail component to test Badge", () => {
  // preparing
  const { getAllByText } = render(<TagDetail tags={tags} filterBlogsByTag={f => f}/>);
  const returnedTags = getAllByText(/tag\d/);
  
  // verifying
  returnedTags.forEach((tag, i) => {
    console.log(`tag: ${tag.textContent}`);
    expect(tag).toHaveClass("mx-1 bg-dark badge");
    expect(tag).toHaveAttribute("name", `tag${i + 1}`);
  });
});

test("render custom tag detail component to test div", () => {
  // preparing
  const { container } = render(<TagDetail tags={tags} filterBlogsByTag={f => f}/>);
  const divElement = container.querySelector("div");

  // verifying
  expect(divElement).toHaveClass("tags-badges my-3");
});

test("test getTags function", () => {
  // preparing
  const metadata = [
    {
      "tags": "tag1,tag2"
    },
    {
      "tags": "tag1,tag3"
    }
  ];
  const tagsArray = getTags(metadata);

  // verifying
  expect(tagsArray.length).toBe(4);
  tagsArray.forEach(tag => {
    console.log(`tag: ${tag}`);
    expect(["tag1", "tag2", "tag3", "all"].includes(tag)).toBeTruthy();
  });
})