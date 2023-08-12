import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Introduction } from './components/Introduction'
import { Navbar } from './components/Navbar'
import { ProjectsList } from './components/ProjectsList'
import { DataProvider } from './context/DataProvider'
import './index.css';
import './index_m.css';
import './index_l.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToolBar } from './components/ToolBar'
import { Skills } from './components/Skills'
import { Awards } from './components/Awards'
import { Certifications } from './components/Certifications'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <BrowserRouter>
    <DataProvider>
      <main className='container'>
        <Navbar/>
        <Introduction/>
        <ToolBar/>
        <Routes>
          <Route path="/personal_webpage/" element={<ProjectsList/>}/>
          <Route path="/personal_webpage/skills" element={<Skills/>} />
          {/*<Route path="/personal_webpage/awards" element={<Awards/>} />*/}
          <Route path="/personal_webpage/certifications" element={<Certifications/>} />
          <Route path="/personal_webpage/contact" element={<Contact/>} />
          <Route path="*" render={() => <h1>Error 404</h1>} />
        </Routes>
        <Footer/>
      </main>
    </DataProvider>
    </BrowserRouter>
  )
}

export default App
