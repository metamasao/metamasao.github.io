// third party
import { HashRouter, Routes, Route } from 'react-router'

// component
import { Index } from './views/pages'
import { Detail } from './views/pages/detail'

import './App.scss'

function App() {  

  return (
    <HashRouter>
      <Routes>        
        <Route path=':filename' element={<Detail />} />
        <Route path='/' element={<Index />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
