import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Error404 from "../components/Error404";

test("test Error404 component", () => {
  // preparing
  const { container } = render(<Error404 content={"test naiyo"}/>);
  const errorCardComponent = container.querySelector(".card");

  // verifying
  expect(errorCardComponent).toHaveTextContent("test naiyo");
})