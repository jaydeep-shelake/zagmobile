import { Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Home from "./pages/Home"
function App() {
  return (
  <div className="w-full">
  <Routes>
     <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Product/>}/>
  </Routes>
  </div>
  )
}

export default App
