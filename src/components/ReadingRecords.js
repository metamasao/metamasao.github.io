import { Link } from "react-router-dom"

import { HeadingH1 } from "./Heading";
import { LightCard } from "./Card";

export default function ReadingRecords() {
  return (
    <LightCard>
      <HeadingH1 content={"年度別記録一覧"}/>
      <p className="mt-2 ms-2"><Link to="record_2023.md">2023年</Link></p>
      <Link to="/">ホームに戻るよ</Link>
    </LightCard>
  )
}