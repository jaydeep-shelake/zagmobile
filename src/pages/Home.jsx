import BottomBar from "../components/BottomBar"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Product from "../components/Product"

const Home = () => {
  return (
    <>
    <div className="w-full no-scrollbar  h-[calc(100vh-70px)] overflow-y-auto" >
    <Header/>
    <Hero/>
    <Product/>
    </div>
    <BottomBar/>
    </>
  )
}

export default Home