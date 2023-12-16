import { useState } from 'react'
import {Route, BrowserRouter as Router,Routes, } from 'react-router-dom'
import './App.css'
import {Home,Contact,About,Project} from './pages/index'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/proyects' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        
      </Router>
    </main>
  )
}

export default App
