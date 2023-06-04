
import searchIcon from "../assets/serach.png"
import filterIcon from "../assets/filtter.png"
import CarsouleCrad from "./home/CarsouleCrad"
const Hero = () => {
    const products  =[
        {
            title:'50% Off On',
            subTitle:'On everything today',
            des:'With code:FSCREATION'
        },
        {
            title:'70% Off On',
            subTitle:'On everything today',
            des:'With code:FSCREATION'
        }
    ]
  return (
    <div className="w-full mt-[28px]">
    <div className="w-full px-[25px]">
       <div className="font-bold text-[25px] leading-[160%] text-[#000000]">
        <p>Welcome,</p>
        <p className="text-[#666666] text-[20px]">Our Fashions App</p>
       </div>


       {/* filter and search section */}
       <div className="w-full flex items-center justify-between mt-[19px]">
            <div className="flex items-center justify-center rounded-[30px] pt-[17px] pb-[13px] px-[26px] bg-[#F3F4F5]  w-[260px] ">
                <label htmlFor="input" className="inline-block">
                    <img src={searchIcon} alt="search" className="w-[15px] h-[15px] mr-[17px]" placeholder=""  />
                </label>
                <input type="text"  id="input" className="h-full bg-transparent outline-none border-none" placeholder="Search..."/>
            </div>
            <div className="flex items-center justify-center h-full">
                <img src={filterIcon} alt="filter" className="w-[50px] h-[50px]" />
            </div>
       </div>
       </div>
       {/* product carsoule */}
       <div className="mt-[30px] w-full flex overflow-auto no-scrollbar pl-[25px]">
        <div className="flex items-center justify-center flex-nowrap">
        {
            products.map((product)=>(
                <CarsouleCrad key={product.title} title={product.title} subTitle={product.subTitle} des={product.des}/>
            ))
        }
     </div>
       </div>
    </div>
  )
}

export default Hero