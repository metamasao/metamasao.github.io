import Container from "react-bootstrap/Container"
import { Routes, Route } from "react-router-dom";

import BlogNav from "./components/Nav";
import Home from "./components/Home";
import BlogList from "./components/Blog";
import { BlogDetail } from "./components/Blog";

function App() {

  return (
    <>
      <BlogNav />
      <Container>
        <h1 className="my-3 mx-3">メモとかブログとか</h1>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/:url" element={<BlogDetail />} />  
        </Routes>
      </Container>
      <footer className="text-center bg-dark text-dark-emphasis fixed-bottom">
        <p className="mt-3">&copy;metamasao</p>
      </footer>
    </>
  )
}

export default App;
