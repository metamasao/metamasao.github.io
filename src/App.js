import Container from "react-bootstrap/Container"
import { Routes, Route } from "react-router-dom";

import BlogNav from "./components/Nav";
import Home from "./components/Home";
import BlogList from "./components/Blog";
import { BlogDetail } from "./components/Blog";
import { HeadingH1 } from "./components/Heading";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <BlogNav />
      <Container>
        <HeadingH1 content={"メモとかブログとか"}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/:url" element={<BlogDetail />} />  
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App;
