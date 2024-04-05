import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'

function App() {
  

  return (
    <div>
      <NavBar/>
      <Hero/>
      <Products/>
    </div>
  )
}

export default App
