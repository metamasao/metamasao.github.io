import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";

import { HeadingH1 } from "../components/Heading";

test("render a custom h1", () => {
  const { getByText } = render(<HeadingH1 content={"test heading 1"}/>);
  const h1 = getByText(/test heading 1/);
  expect(h1).toHaveTextContent("test heading 1");
})



