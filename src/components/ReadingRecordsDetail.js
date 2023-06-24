import { useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"

import { LightCard, CardText, CardTitle } from "./Card";
import useFetch from "./CustomHook";
import Loader from "./Loader";
import { HeadingH2 } from "./Heading";

export default function ReadingRecordsBookDetail() {
  let { isbn } = useParams();
  const { data, error, loading } = useFetch(`https://api.openbd.jp/v1/get?isbn=${isbn}`);

  if (error) return console.log(error);
  if (loading) return <Loader />;

  const collateralDetail = data[0].onix.CollateralDetail;
  return (
    <LightCard>
      <HeadingH2 content="書誌情報"/>
      <BookSummary summary={data[0].summary}/>
      <hr className="mt-4"/>
      <Row className="mt-3">
        {collateralDetail.hasOwnProperty("TextContent") ? <BookDetailInfo bookDetail={collateralDetail.TextContent}/> : <p>詳細情報Not Found...ないよ</p>}
      </Row>
      <Link to="/">ホームに戻るよ</Link>
    </LightCard>
  )
}

export function BookSummary({ summary }) {
  return (
    <Row className="mt-3">
      <Col className="align-self-center mt-3">
        <div className="text-center">
          <Image 
            src={summary.cover} 
            alt="no-image" 
            style={{height: "300px", width: "200px", boxShadow: "5px 5px 5px grey"}}
          />
        </div>
      </Col>
      <Col className="align-self-center mt-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Title: {summary.title}</li>
          <li className="list-group-item">Author: {summary.author}</li>
          <li className="list-group-item">Publisher: {summary.publisher}</li>
          <li className="list-group-item">Publish Date: {summary.pubdate}</li>
          <li className="list-group-item">ISBN: {summary.isbn}</li>
        </ul>
      </Col>
    </Row>
  )
}

export function BookDetailInfo({ bookDetail }) {
  return (
    <Row className="mt-3">
      <CardText>
        <h3 style={{fontSize: "21px"}}>詳細情報</h3>
        {bookDetail.map((text, i) => (<p key={i} style={{whiteSpace: "pre-wrap"}}>{text.Text}</p>))}
      </CardText>
    </Row>
  )
}