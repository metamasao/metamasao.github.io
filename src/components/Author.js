import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import { BsGithub } from "react-icons/bs";

import useFetch from "./CustomHook";
import { HeadingH2 } from "./Heading";
import Loader from "./Loader";

export default function Author() {
  const { data, error, loading } = useFetch("https://api.github.com/users/metamasao");

  if (error) return console.log(error);
  if (loading) return <Loader />;
  
  return (
    <div className="author">
      <HeadingH2 content={"わたしよ"}/>
      <AuthorDetailCard data={data}/>
    </div>
  )
}

export function AuthorDetailCard({ data }) {
  return (
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
          <p className="text-start mx-2"><Card.Link href={data.html_url}><BsGithub size={"2em"}/></Card.Link></p>
        </Col>
      </Row>
    </Card>
  )
}