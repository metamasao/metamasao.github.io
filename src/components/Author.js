import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image"
import { BsGithub, BsTwitter } from "react-icons/bs";

import useFetch from "./CustomHook";
import Loader from "./Loader";
import { LightCard, CardTitle } from "./Card";

export default function Author() {
  const { data, error, loading } = useFetch("https://api.github.com/users/metamasao");

  if (error) return console.log(error);
  if (loading) return <Loader />;
  
  return (
    <div className="author">
      <AuthorDetailCard data={data}/>
    </div>
  )
}

export function AuthorDetailCard({ data }) {
  return (
    <LightCard>
      <CardTitle title={"Me"}/>
      <Row>
        <div className="text-center">
          <Image src={data.avatar_url} roundedCircle style={{width: "180px", height: "180px"}} />
        </div>
      </Row>
      <Row>
        <div className="text-center mt-4">
          <p className="mx-2">
            形而上学、倫理学、生物学の哲学、論理学、数学、物理、プログラミングが好き。
            <a href="https://metamasao.github.io/#/blogs/profile.md">プロフィール</a>          
          </p>      
          <span className="mx-2">SNSとGithub: </span>
          <span className="text-start mx-2"><Card.Link href="https://twitter.com/metamasao"><BsTwitter size={"2em"}/></Card.Link></span>
          <span className="text-start mx-2"><Card.Link href={data.html_url}><BsGithub size={"2em"}/></Card.Link></span>
        </div>        
      </Row>    
    </LightCard>
  )
}