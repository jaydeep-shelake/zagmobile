import shoppingIcon from "../assets/shoping.png"
const PaymentModal = ({handleModals}) => {
    
    const handleSubmit =()=>{
        handleModals()
      
    }
  return (
    <div className='fixed  w-full h-full top-0 left-0 bg-[#00000099] flex items-center justify-center'>
      <div className='w-[413px]  bg-white p-[25px] rounded-[8px]'>
         <div className='w-full'>
            <label htmlFor="">Card Number</label>
            <div className='w-full'>
               <input type="text" className='w-full outline-none border border-gray-500 py-[10px] px-[15px] mt-[8px] rounded-[8px]' />
            </div>
         </div>
         <div className='w-full mt-[15px]'>
            <label htmlFor="">Name on card</label>
            <div className='w-full'>
               <input type="text" className='w-full outline-none border border-gray-500 py-[10px] px-[15px] mt-[8px] rounded-[8px]' />
            </div>
         </div>
         <div className='w-full flex mt-[15px]'>
        <div className='flex-[50%] mr-[10px]'>
<label htmlFor="">Expiration date</label>
            <div className='w-full '>
               <input type="text" className='w-full outline-none border border-gray-500 py-[10px] px-[15px] mt-[8px] rounded-[8px]' />
            </div>
        </div>
        <div className='flex-[50%]'>
            <label htmlFor="">Security code</label>
            <div className='w-full'>
               <input type="text" className='w-full outline-none border border-gray-500 py-[10px] px-[15px] mt-[8px] rounded-[8px]' />
            </div>
        </div>
         </div>

         <button className='flex items-center justify-center w-full py-[17px] bg-[#000000] text-[#fff] rounded-[30px] mt-[20px]' onClick={handleSubmit}>
              <img src={shoppingIcon} alt="bag"  className="w-[16px] h-[16px] mr-[16px]"/>
            Pay Now</button>
      </div>
    </div>
  )
}

export default PaymentModal