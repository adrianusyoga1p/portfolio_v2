import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Projects from './routes/Projects.jsx'
// import DetailProject from './routes/DetailProject.jsx'
import Front from './layouts/Front.jsx'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Front/>} >
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
