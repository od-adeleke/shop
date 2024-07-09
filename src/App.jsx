import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Breadcrumb from './components/Breadcrumb'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Breadcrumb />
      <Body />
    </>
  )
}

export default App
