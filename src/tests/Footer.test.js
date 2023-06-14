import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Footer from "../components/Footer";

test("test Footer component", () => {
  // preparing
  const { container } = render(<Footer />);
  const footerElement = container.querySelector("footer");

  // verifying
  expect(footerElement).toHaveClass("text-center bg-dark text-dark-emphasis py-1");
  expect(footerElement).toHaveTextContent("©metamasao");
})