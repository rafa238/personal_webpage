import { About } from './components/About'
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

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  

  return (
    <DataProvider>
      <main className='container'>
        <Navbar/>
        <Introduction/>
        {/*<About/>*/}
        <ProjectsList/>
        <Contact/>
        <Footer/>
      </main>
    </DataProvider>
  )
}

export default App
