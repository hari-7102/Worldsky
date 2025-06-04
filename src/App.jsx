import React from 'react'
import { BrowserRouter as Routers , Routes , Route } from 'react-router-dom'
import Home from './component/Home'
import AboutUs from './component/AboutUs'
import Project from './component/Project'
import Service from './component/Service'
import Contact from './component/Contact'
import Question from './component/Question'
import ScrollToTop from './component/ScrollToTop'
const App = () => {
  return (
    <div>
      
      <Routers>
        <ScrollToTop/>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/question" element={<Question/>}/>
          </Route>
        </Routes>
      </Routers>
    </div>
  )
}

export default App