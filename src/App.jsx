import { Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Home from "./pages/Home"
import BottomBar from "./components/BottomBar"
import React from "react"
function App() {
  return (
  <div className="max-w-[375px] w-full mx-auto">
  <Routes>
     <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Product/>}/>
  </Routes>
  </div>
  )
}

export default App
