import { useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"

import { LightCard, CardText, CardTitle } from "./Card";
import useFetch from "./CustomHook";
import Loader from "./Loader";

export default function ReadingRecordsDetail() {
  let { isbn } = useParams();
  console.log(isbn)
  const { data, error, loading } = useFetch(`https://api.openbd.jp/v1/get?isbn=${isbn}`);

  if (error) return console.log(error);
  if (loading) return <Loader />;

  console.log(data[0].summary)
  console.log(data[0].onix.CollateralDetail.TextContent)
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
          <ul>
            <li>Title: {bookSummary.title}</li>
            <li>Author: {bookSummary.author}</li>
            <li>Publisher: {bookSummary.publisher}</li>
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