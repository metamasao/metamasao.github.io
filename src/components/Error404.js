import { Link } from "react-router-dom";

import { LightCard } from "./Card"

export default function Error404({ content }) {
  return (
    <LightCard>
      <h2>{content}</h2>
      <Link to="/">ホームに戻るよ</Link>
    </LightCard>
  );
}