import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CardTitle, CardSubtitle, CardText, LightCard } from "../components/Card";

describe("test card components", () => {
  test("test CardTitle", () => {
    // preparing
    const { container } = render(<CardTitle title={"test title 1"}/>);
    const cardTitleElement = container.querySelector(".pt-1");

    // verifying
    expect(cardTitleElement).toHaveTextContent("Title: test title 1");
  });

  test("test CardSubtitle", () => {
    // preparing
    const tags = "tag1,tag2";
    const created = "2023-01-01 00:00:00";
    const { container } = render(<CardSubtitle tags={tags} created={created}/>);
    const cardSubtitleElement = container.querySelector(".text-muted");

    // verifying
    expect(cardSubtitleElement).toHaveTextContent("Tags: tag1,tag2 | Created: 2023-01-01 00:00:00");    
  })

  test("test CardText", () => {
    // prepaing
    const { container } = render(<CardText children={"test content"} />);
    const textCardElement = container.querySelector(".pt-1");

    // verifying
    expect(textCardElement).toHaveTextContent("test content");
  })
});
