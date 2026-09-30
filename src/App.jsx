import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Introduction } from './components/Introduction'
import { Navbar } from './components/Navbar'
import { ProjectsList } from './components/ProjectsList'
import { DataProvider, DataContext } from './context/DataProvider'
import { ToolBar } from './components/ToolBar'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import './index.css'
import './index_m.css'
import './index_l.css'
import './portfolio.css'

const SectionScroll = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [pathname, hash])

  return null
}

const NotFound = () => {
  const { not_found } = useContext(DataContext)

  return <h1>{not_found}</h1>
}

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <SectionScroll />
        <main className="container">
          <Navbar />
          <Introduction />
          <ToolBar />
          <div className="section-panel">
            <Routes>
              <Route path="/personal_webpage/" element={<Experience />} />
              <Route path="/personal_webpage/projects" element={<ProjectsList />} />
              <Route path="/personal_webpage/skills" element={<Skills />} />
              <Route path="/personal_webpage/certifications" element={<Navigate to="/personal_webpage/#content" replace />} />
              <Route path="/personal_webpage/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
