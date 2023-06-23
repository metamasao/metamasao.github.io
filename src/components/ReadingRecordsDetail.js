import { useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"

import { LightCard, CardText, CardTitle } from "./Card";
import useFetch from "./CustomHook";
import Loader from "./Loader";

export default function ReadingRecordsDetail() {
  let { isbn } = useParams();
  const { data, error, loading } = useFetch(`https://api.openbd.jp/v1/get?isbn=${isbn}`);

  if (error) return console.log(error);
  if (loading) return <Loader />;

  const bookSummary = data[0].summary;
  const bookDetail = data[0].onix.CollateralDetail.TextContent;
  return (
    <LightCard>
      <CardTitle title={bookSummary.title}></CardTitle>
      <Row className="mt-3">
        <Col className="align-self-center mt-3">
          <div className="text-center">
            <Image 
              src={bookSummary.cover} 
              alt="no-image" 
              style={{height: "300px", width: "200px", boxShadow: "5px 5px 5px grey"}}
            />
          </div>
        </Col>
        <Col className="align-self-center mt-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Title: {bookSummary.title}</li>
            <li className="list-group-item">Author: {bookSummary.author}</li>
            <li className="list-group-item">Publisher: {bookSummary.publisher}</li>
            <li className="list-group-item">Publish Date: {bookSummary.pubdate}</li>
            <li className="list-group-item">ISBN: {bookSummary.isbn}</li>
          </ul>
        </Col>
      </Row>
      <hr className="mt-4"/>
      <Row className="mt-3">
        <CardText>
          <h3 style={{fontSize: "21px"}}>詳細情報</h3>
          {bookDetail.map((text, i) => (<p key={i} style={{whiteSpace: "pre-wrap"}}>{text.Text}</p>))}
        </CardText>
      </Row>
      <Link to="/">ホームに戻るよ</Link>
    </LightCard>
  )
}