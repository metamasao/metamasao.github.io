import { RingLoader } from "react-spinners";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container";

import useFetch from "./CustomHook";

export default function Author() {
  const { data, error, loading } = useFetch("https://api.github.com/users/metamasao");

  if (error) return console.log(error);
  if (loading) return <Container><RingLoader /></Container>;
  
  return (
    <div className="author mx-3">
      <h2 className="my-3">わたしよ</h2>
      <Card className="my-3 py-3 shadow-lg" border="light">
        <Row>
          <Col className="align-self-center">
            <div className="text-center">
              <Image src={data.avatar_url} roundedCircle style={{width: "250px", height: "250px"}} />
            </div>
          </Col>
          <Col className="align-self-center">
            <p className="mx-2">
              {data.bio}
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  )
}