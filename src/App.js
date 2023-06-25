import Container from "react-bootstrap/Container"
import { Routes, Route } from "react-router-dom";
import "./App.css"

import BlogNav from "./components/Nav";
import Home from "./components/Home";
import BlogList from "./components/Blog";
import { BlogDetail } from "./components/Blog";
import ReadingRecords from "./components/ReadingRecords";
import ReadingRecordsDetail from "./components/ReadingRecordsDetail";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

function App() {

  return (
    <>
      <BlogNav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/:url" element={<BlogDetail />} />
          <Route path="reading_records" element={<ReadingRecords />} />
          <Route path="reading_records/:filename" element={<ReadingRecordsDetail />} />
          <Route path="*" element={<Error404 content={"ない！"}/>}/>
        </Routes>
      </Container>
      <Footer author={"metamasao"}/>
    </>
  )
}

export default App;
