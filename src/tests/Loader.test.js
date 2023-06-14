import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Loader from "../components/Loader";

test("test Loader whether to include svg", () => {
    // preparing
    const { container } = render(<Loader />);

    // verifying 
    // https://github.com/davidhu2000/react-spinners を見ると、spanタグで上手くやってらっしゃるぽいので以下のようにしてみた。
    expect(container.querySelector("span")).toBeTruthy();
})