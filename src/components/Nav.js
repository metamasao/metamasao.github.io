import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function NavLink({ to, linkColor, children }) {
  return (
    <Link className="me-4" to={to} style={{textDecoration: "none", color: linkColor }}>
      {children}
    </Link>
  );
}

export default function BlogNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to={"/"} linkColor={"white"}>メモメモ</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto ms-3">
          <NavLink to={"blogs"} linkColor={"grey"}>書いた一覧</NavLink>
          <NavLink to={"reading_records"} linkColor={"grey"}>読書記録</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}