import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { AuthorDetailCard } from "../components/Author";

test("test AuthorDetailCard component", () => {
  // preparing
  const authorData = {
    "avatar_url": "test_somewhere_image_url",
    "bio": "test bio dayo"
  }

  const { container } = render(<AuthorDetailCard data={authorData}/>);
  const imgElement = container.querySelector("img");
  const bioElement = container.querySelector("p.mx-2");

  // verifying
  expect(imgElement).toHaveAttribute("src", "test_somewhere_image_url");
  expect(bioElement).toHaveTextContent("test bio dayo");
  expect(container.querySelector("svg")).toBeTruthy();
})