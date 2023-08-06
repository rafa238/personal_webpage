import { About } from './components/About'
import { Contact } from './components/Contact'
import { Introduction } from './components/Introduction'
import { Navbar } from './components/Navbar'
import { ProjectsList } from './components/ProjectsList'
import { DataProvider } from './context/DataProvider'
import './index.css';

function App() {
  return (
    <DataProvider>
      <main className='container'>
        <Navbar/>
        <Introduction/>
        {/*<About/>*/}
        <ProjectsList/>
        <Contact/>
      </main>
    </DataProvider>
  )
}

export default App
