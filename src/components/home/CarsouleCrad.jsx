
 import productImg from "../../assets/product.png"
 const CarsouleCrad = ({title,subTitle,des}) => {
   return (
     <div className="relative w-[260px] h-[160px] rounded-[30px] mr-[15px] p-[15px]">
       <img src={productImg} alt="product" className="w-full h-full absolute top-0 left-0 rounded-[30px] z-[-1]" />
       <p className="font-bold text-[25px] leading-[150%] text-[#000000]">{title}</p>
       <p className="text-[20px] leading-[150%] text-[#000000]">{subTitle}</p>
       <p className="font-semibold text-[11px] leading-[150%] text-[#666666] mt-[10px]">{des}</p>
       <button className="px-[14px] py-[5px] bg-[#000000] rounded-[30px] font-bold text-[10px] leading-[150%] text-[#FFFFFF] w-[80px] mt-[15px]">Get Now</button>
     </div>
   )
 }
 
 export default CarsouleCrad