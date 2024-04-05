import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import TopProducts from './Components/TopProducts/TopProducts'
import Banner from './Components/Banner/Banner'
import Subscribe from './Components/Subscribe/Subscibe'
import Testimonials from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavBar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Testimonials/>
      <Footer/>

    </div>
  )
}

export default App
