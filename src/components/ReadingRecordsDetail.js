import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Table from "react-bootstrap/Table";

import useFetch from "./CustomHook";
import Loader from "./Loader";
import { LightCard } from "./Card";

export default function ReadingRecordsDetail() {
  let { filename } = useParams();
  const { data, error, loading } = useFetch(
    `https://raw.githubusercontent.com/metamasao/metamasao.github.io/main/reading_records/${filename}`,
    false
  );

  if (error) return console.log(error);
  if (loading) return <Loader />;

  return (
    <LightCard>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{table: ({Node, ...props}) => <Table responsive striped bordered hover size="sm" {...props} />}}
      >
        {data}
      </ReactMarkdown>
      <Link to="/">ホームに戻るよ</Link>
    </LightCard>
  )
}