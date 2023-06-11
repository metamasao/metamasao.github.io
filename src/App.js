import Container from "react-bootstrap/Container"

import BlogNav from "./components/Nav";
import BlogList from "./components/Blog";

function App() {

  return (
    <>
      <BlogNav />
      <Container>
        <BlogList />
      </Container>
    </>
  )
}

export default App;
