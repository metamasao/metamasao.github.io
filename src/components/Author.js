import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import { BsGithub, BsTwitter } from "react-icons/bs";

import useFetch from "./CustomHook";
import { HeadingH2 } from "./Heading";
import Loader from "./Loader";
import { LightCard } from "./Card";

export default function Author() {
  const { data, error, loading } = useFetch("https://api.github.com/users/metamasao");

  if (error) return console.log(error);
  if (loading) return <Loader />;
  
  return (
    <div className="author">
      <HeadingH2 content={"わたし"}/>
      <AuthorDetailCard data={data}/>
    </div>
  )
}

export function AuthorDetailCard({ data }) {
  return (
    <LightCard>
      <Row>
        <Col className="align-self-center">
          <div className="text-center">
            <Image src={data.avatar_url} roundedCircle style={{width: "200px", height: "200px"}} />
          </div>
        </Col>
        <Col className="align-self-center">
          <p className="mx-2 mt-2">
            形而上学、倫理学、生物学の哲学、論理学、数学、物理、プログラミングが好き。
            <a href="https://metamasao.github.io/#/blogs/profile.md">プロフィール</a>          
          </p>      
          <span className="mx-2">SNSとGithub: </span>
          <span className="text-start mx-2"><Card.Link href="https://twitter.com/metamasao"><BsTwitter size={"2em"}/></Card.Link></span>
          <span className="text-start mx-2"><Card.Link href={data.html_url}><BsGithub size={"2em"}/></Card.Link></span>
        </Col>
      </Row>
    </LightCard>
  )
}