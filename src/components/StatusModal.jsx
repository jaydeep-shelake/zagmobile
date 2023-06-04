const StatusModal = ({title,icon,text,spinner, outsideClick,setSucess}) => {

    const handleClick =()=>{
        if( outsideClick){
            setSucess(false)
        }
    }
  return (
    <div onClick={handleClick} className="fixed  w-full h-full top-0 left-0 bg-[#00000099] flex items-center justify-center">
     <div className="bg-[#FFF] rounded-[8px] w-[413px] p-[25px] flex items-center justify-center flex-col">
        {
        spinner?(<img class="animate-spin" src="https://res.cloudinary.com/qtalk/image/upload/v1675664361/SSUP%20Wrapper/loader_bxmyka.svg" alt="loader" />):<img src={icon} className="h-[40px] w-[40px]"/>
     }
     <p className="font-semibold text-[16px] leading-[150%] text-[#000000] mt-[10px]">{title}</p>
     <p className="text-[11px] leading-[150%] text-[#666666]">{text}</p>
     </div>
    </div>
  )
}

export default StatusModal