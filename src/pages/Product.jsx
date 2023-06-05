import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import shoppingIcon from "../assets/shoping.png"
import loveWhite from "../assets/lovewhite.png"
import cart2 from "../assets/cart2.png"
import backIcon from "../assets/arrow.png"
import womenImg from "../assets/women.png"
import PaymentModal from "../components/PaymentModal"
import StatusModal from "../components/StatusModal"
const Product = () => {
    const [count,setCount] =useState(1)
    const [price,setPrice] =useState(198)
    const [showModal,setShowModal] =useState(false)
    const [loading,setLoading] =useState(false)
    const [sucess,setSucess] = useState(false)
    const [activeSize,setActiveSize] =useState(0)
    const navigate = useNavigate()
    let PRICE= 198
    const decreaseCount =()=>{
      setCount(count-1)
    }

    useEffect(()=>{
        if(count===0) setCount(1)
        setPrice(PRICE*count)
    },[count])

    const increaseCount =()=>{
      setCount(count+1)
    }


    const sizes =[
        'S','M','L','XL',"XXL"
    ]

    const handleModals  =()=>{
        setShowModal(false)
       setLoading(true)
      setTimeout(()=>{
      setLoading(false)
      setSucess(true)
      },1000)
    }

  return (
    <div className="w-full relative h-screen">
      {/* image carsoule */}
      <div className=" relative w-full h-[430px]">
       <img src={womenImg} alt="women" width="w-full h-full" />
       <img src={backIcon} alt="back" className=" cursor-pointer absolute left-[20px] top-[20px] w-[35px] h-[35px]" onClick={()=>r=navigate('/')} />
       <img src={cart2} alt="back" className=" absolute right-[20px] top-[20px] w-[30px] h-[30px]" />
       <img src={loveWhite} alt="heart" className=" absolute right-[20px] top-[270px] w-[30px] h-[30px]" />
       <div className="flex top-[270px]  left-[50%] translate-x-[-50%]">
         <span className="w-[2px] h-[2px] rounded-full bg-white"></span>
       </div>
      </div>
     <div className="h-[412px] max-w-[375px] w-full mx-auto bg-[#FFFFFF] rounded-t-[30px] fixed bottom-0  mt-[20px] px-[25px] pt-[25px]">
       <div className="w-full flex items-center justify-between">
        <div className="w-[60%]">
        <p className="font-semibold text-[18px] leading-[208%] text-[#000000]">Roller Rabbit</p>
        <p className="font-semibold text-[14px] leading-[208%] text-[#666666]">Vado Odelle Dress</p>
        <div className="flex w-full items-start justify-start">
            <div className="flex">
           {Array(5).fill(0).map((num,i)=>(
            
            <svg width="12" key={i} height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[4px]">
                <path d="M9.21559 6.8427C9.06565 6.988 8.99676 7.19815 9.03092 7.40424L9.54557 10.2525C9.58899 10.4939 9.4871 10.7382 9.28506 10.8777C9.08707 11.0224 8.82367 11.0398 8.60774 10.924L6.04375 9.58673C5.95459 9.53926 5.8556 9.51378 5.75429 9.51089H5.59741C5.54299 9.51899 5.48973 9.53636 5.4411 9.56299L2.87653 10.9066C2.74975 10.9703 2.60618 10.9929 2.4655 10.9703C2.12279 10.9055 1.89412 10.579 1.95027 10.2345L2.4655 7.38629C2.49966 7.17846 2.43077 6.96716 2.28083 6.81954L0.190389 4.79336C0.0155586 4.62374 -0.0452268 4.36902 0.0346627 4.1392C0.112237 3.90995 0.310223 3.74265 0.549313 3.70502L3.42649 3.28763C3.64532 3.26505 3.83752 3.1319 3.93593 2.93507L5.20375 0.335767C5.23385 0.277877 5.27264 0.224617 5.31953 0.179462L5.37163 0.138938C5.39884 0.108835 5.4301 0.0839419 5.46484 0.0636801L5.52794 0.0405237L5.62635 0H5.87007C6.08774 0.0225775 6.27936 0.152832 6.37951 0.347346L7.66411 2.93507C7.75674 3.12437 7.93678 3.25579 8.14461 3.28763L11.0218 3.70502C11.2649 3.73975 11.4681 3.90764 11.5486 4.1392C11.6244 4.37133 11.559 4.62605 11.3807 4.79336L9.21559 6.8427Z" fill="#FFAB07"/>
            </svg>
           ))}
           </div>
           <p className="ml-[9px] text-[11px] leading-[150%] text-[#000000]">(320 review)</p>
        </div>
        </div>
        <div className="w-[40%] flex flex-col items-end justify-end">
          <div className="w-[70px] py-[5px] px-[11px] text-[11px] leading-[150%] text-[#000000] flex items-center justify-between bg-[#EEEEEE]  rounded-[30px] cursor-pointer">
              <div onClick={decreaseCount}>-</div>
              <div>{count}</div>
              <div onClick={increaseCount}>+</div>
          </div>
          <p className="text-[11px] leading-[150%] text-[#000000] mt-[11px]">Avaliable in stok</p>
        </div>
       </div>
       <div className="w-full mt-[20px]">
        <p className="font-semibold text-[16px] leading-[150%] text-[#000000]">Sizes</p>
        <div className="w-full flex items-start justify-start mt-[12px]">
            {
                sizes.map((size,i)=>(
                    <div key={size} onClick={()=>setActiveSize(i)} className={`w-[40px] h-[40px] mr-[15px] rounded-full border border-[#DDDDDD] font-semibold text-[14px] leading-[150%] flex items-center justify-center cursor-pointer hover:bg-[#000000] hover:text-[#FFFFFF] ${activeSize===i?'bg-[#000000] text-[#FFFFFF]':'text-[#888888] '}`}>
                     {size}
                    </div>
                ))
            }
          
        </div>
        <div className="w-full mt-[25px]">
        <p className="font-semibold text-[16px] leading-[150%] text-[#000000]">Description</p>
         <p className="text-[11px] leading-[150%] text-[#666666] mt-[15px]">Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.</p>
        </div>

        <div className="w-full mt-[32px] flex items-center justify-between">
          <div>
            <span className="text-[#AAAAAA] text-[9px]  leading-[150%]">Total price</span>
            <p className="font-semibold text-[16px] leading-[150%] text-[#000000]">${price}.00</p>
          </div>
          <div>
            <button className="flex items-center justify-center w-[200px] py-[17px] bg-[#000000] rounded-[30px]" onClick={()=>setShowModal(!showModal)}>
              <img src={shoppingIcon} alt="bag"  className="w-[16px] h-[16px] mr-[16px]"/>
              <p className="font-semibold text-[16px] leading-[100%] text-[#FFFFFF] " >Buy Now</p>
            </button>
          </div>
        </div>
       </div>
     </div>
    {showModal&&<PaymentModal handleModals={handleModals}/>}
    {loading&& <StatusModal text="Please wait do not close the screen" title="Payment is processing" spinner={true}/>}
    {sucess&& <StatusModal title="Payment Recvived" text="Your order is now on the way" icon="https://img.icons8.com/?size=512&id=63262&format=png"  outsideClick={true} setSucess={setSucess} />}
    </div>
  )
}

export default Product