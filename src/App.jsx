import { About } from './components/About'
import { Contact } from './components/Contact'
import { Introduction } from './components/Introduction'
import { Navbar } from './components/Navbar'
import { ProjectsList } from './components/ProjectsList'
import { DataProvider } from './context/DataProvider'
import "./index.css";

function App() {
  return (
    <DataProvider>
      <Navbar/>
      <Introduction/>
      {/*<About/>*/}
      <ProjectsList/>
      <Contact/>
    </DataProvider>
  )
}

export default App
