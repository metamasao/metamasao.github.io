import {Routes, Route} from "react-router-dom"
import './App.scss';

import { HomeTemplate } from './components/templates/Home/HomeTemplate';
import { Blog } from './components/templates/Blog/Index';
import { BlogProvider } from "./components/contexts/BlogProvider";
import { Error404 } from "./pages/Error404";

function App() {

  return (
    <div className="App">
      <BlogProvider>
        <Routes>
          <Route path="/" element={<HomeTemplate />} />
          <Route path="blog/:filename" element={<Blog />} />
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </BlogProvider>
    </div>
  );
}

export default App;
