import loveIcon from "../../assets/love.png"
const ProductCard = ({img,title,subTitle,price}) => {
  return (
    <div className="w-[158px] ">
      <div className="w-full h-[176px] relative">
        <img src={img} alt={title}  className="h-full w-full"/>
        <img src={loveIcon} alt="love" className="w-[20px] h-[20px] absolute top-[10px] right-[10px]" />
      </div>
      <div className="flex items-center justify-center flex-col mt-[7px]">
      <p className="font-semibold text-[14px] leading-[150%] text-[#000000]">{title}</p>
      <p className="font-semibold text-[10px] leading-[150%] text-[#666666]">{subTitle}</p>
      <p className="font-semibold text-[14px] leading-[150%] text-[#000000]">${price}</p>

      </div>
    </div>
  )
}

export default ProductCard