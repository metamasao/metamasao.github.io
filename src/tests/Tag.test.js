import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { TagDetail } from "../components/Tag";

const tags = ["tag1", "tag2"]

test("render custom tag detail component to test Badge", () => {
  const { getAllByText } = render(<TagDetail tags={tags} filterBlogsByTag={f => f}/>);
  const returnedTags = getAllByText(/tag\d/);
  returnedTags.forEach((tag, i) => {
    console.log(`tag: ${tag.textContent}`);
    expect(tag).toHaveClass("mx-1 bg-dark badge");
    expect(tag).toHaveAttribute("name", `tag${i + 1}`);
  });
});

test("render custom tag detail component to test div", () => {
  const { container } = render(<TagDetail tags={tags} filterBlogsByTag={f => f}/>);
  const divElement = container.querySelector("div");
  expect(divElement).toHaveClass("tags-badges my-3");
});