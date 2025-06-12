import React from 'react'
import { BrowserRouter as Routers , Routes , Route } from 'react-router-dom'
import Home from './component/Home'
import AboutUs from './component/AboutUs'
import Project from './component/Project'
import Service from './component/Service'
import Contact from './component/Contact'
import Question from './component/Question'
import ScrollToTop from './component/ScrollToTop'
import Indonesia from './component/Destination/Indonesia'
import Japan from './component/Destination/Japan'
import Italy from './component/Destination/Italy'
import India from './component/Destination/India'
const App = () => {
  return (
    <div>
      
      <Routers>
        <ScrollToTop/>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/destination" element={<Project/>}/>
            <Route path="/reviews" element={<Service/>}/>
            <Route path="/contact" element={<Question/>}/>
            <Route path="/question" element={<Question/>}/>
            <Route path="/destination/indonesia" element={<Indonesia/>}/>
            <Route path="/destination/japan" element={<Japan/>}/>
            <Route path="/destination/italy" element={<Italy/>}/>
            <Route path="/destination/india" element={<India/>}/>
          </Route>
        </Routes>
      </Routers>
    </div>
  )
}

export default App