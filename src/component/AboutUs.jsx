import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FirstCardImage from '../assets/img3.jpeg'
import Hero from './About/Hero'
import About from './About/About'
const AboutUs = () => {
  return (
    <div>
      <Navbar/>
        {/* <div   className="h-96 w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${FirstCardImage})` }}>
            <p className="text-white text-2xl font-semibold">Welcome to our vlog</p>
        </div> */}
        <Hero/>
        <About/>
        <Footer/>

    </div>
  )
}

export default AboutUs