import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function BlogNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link href="#">
            Home
          </Nav.Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}