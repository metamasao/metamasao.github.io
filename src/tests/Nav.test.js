import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import BlogNav from "../components/Nav";

test("test BlogNav", () => {
  const { container } = render(<BlogNav />);
  const navElement = container.querySelector("nav");
  expect(navElement).toHaveClass("navbar navbar-expand navbar-dark bg-dark");
})

test("test BlogNav navbar brand", () => {
  const { container } = render(<BlogNav />);
  const navBrandElement = container.querySelector("a.navbar-brand");
  expect(navBrandElement).toHaveAttribute("href", "/");
  expect(navBrandElement).toHaveTextContent("ホームだよ");
})

test("test nav link", () => {
  const { container } = render(<BlogNav />);
  const navLinkElement = container.querySelector("a.nav-link");
  expect(navLinkElement).toHaveAttribute("href", "/blogs");
  expect(navLinkElement).toHaveTextContent("書いたよ一覧だよ");
})