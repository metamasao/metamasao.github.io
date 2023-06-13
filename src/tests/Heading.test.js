import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";

import { HeadingH1, HeadingH2 } from "../components/Heading";

test("render a custom h1", () => {
  const { getByText } = render(<HeadingH1 content={"test heading 1"}/>);
  const h1 = getByText(/test heading 1/);
  expect(h1).toHaveTextContent("test heading 1");
  expect(h1).toHaveClass("mt-3");
});

test("render a custom h2", () => {
  const { getByText } = render(<HeadingH2 content={"test heading 2"}/>);
  const h2 = getByText(/test heading 2/);
  expect(h2).toHaveTextContent("test heading 2");
  expect(h2).toHaveClass("mt-3");
});


