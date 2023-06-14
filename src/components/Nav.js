import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function BlogNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">ホームだよ</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/blogs">書いたよ一覧だよ</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}