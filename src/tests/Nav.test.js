import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

import BlogNav from "../components/Nav";
import { NavLink } from "../components/Nav";

test("test NavLink", () => {
  //preparing
  const { container } = render(
    <MemoryRouter>
      <NavLink to={"somewhere"} linkColor={"white"}>
        "test link text"
      </NavLink>
    </MemoryRouter>
  );
  const aTagComponent = container.querySelector("a");

  //verifying
  expect(aTagComponent).toHaveAttribute("href", "/somewhere");
  expect(aTagComponent).toHaveAttribute("style", "text-decoration: none; color: white;");
  expect(aTagComponent).toHaveTextContent("test link text");
})

test("test Navbar", () => {
  // preparing
  const { container } = render(
    <MemoryRouter>
      <BlogNav />
    </MemoryRouter>
  );
  const navComponent = container.querySelector("nav");

  // verifying
  expect(navComponent).toHaveClass("navbar navbar-expand navbar-dark bg-dark");
})