import { useEffect } from "react";
import shoppingIcon from "../assets/shoping.png"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
const PaymentModal = ({handleModals}) => {
   const schema =  yup.object({
      cardNumber:yup.string().required("Please enter your card number").max(16,'Card number must be at least 16 digits').min(16,'Card number must not exceed 16 digits'),
      name:yup.string("").required("Enter your name"),
      date:yup.string().required("Enter Date"),
      code:yup.string().required("Enter security code").min(3,'Security code must be at least 3 digits').max(4,'Security code should not exeed 3 digits')
   })
      const { register, handleSubmit, formState: { errors } } = useForm({
         resolver:yupResolver(schema)
      });
    const onSubmit =(data)=>{
        handleModals()
        console.log("data",data)
    }
  return (
    <div className='fixed  w-full h-full top-0 left-0 bg-[#00000099] flex items-center justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-[413px]  bg-white p-[25px] rounded-[8px]'>
         <div className='w-full'>
            <label htmlFor="">Card Number</label>
            <div className='w-full'>
               <input type="text" className='w-full outline-none border border-gray-500 py-[10px] px-[15px] mt-[8px] rounded-[8px]' {...register("cardNumber",{required:true})} />
            </div>
           {errors?.cardNumber?.message&&<p className="text-red-400 text-[13px]">{errors?.cardNumber?.message}</p>}
         </div>
         <div className='w-full mt-[15px]'>
            <label htmlFor="">Name on card</label>
            <div className='w-full'>
               <input type="text" className='w-full outline-none border border-gray-500 py-[10px] px-[15px] mt-[8px] rounded-[8px]' {...register("name",{required:true})} />
            </div>
           {errors?.name?.message&&<p className="text-red-400 text-[13px]">{errors?.name?.message}</p>}

         </div>
         <div className='w-full flex mt-[15px]'>
        <div className='flex-[50%] mr-[10px]'>
<label htmlFor="">Expiration date</label>
            <div className='w-full '>
               <input type="text" className='w-full outline-none border border-gray-500 py-[10px] px-[15px] mt-[8px] rounded-[8px]' {...register("date",{required:true})} />
            </div>
           {errors?.date?.message&&<p className="text-red-400 text-[13px]">{errors?.date?.message}</p>}

        </div>
        <div className='flex-[50%]'>
            <label htmlFor="">Security code</label>
            <div className='w-full'>
               <input type="text" className='w-full outline-none border border-gray-500 py-[10px] px-[15px] mt-[8px] rounded-[8px]' {...register("code",{required:true})} />
            </div>
           {errors?.code?.message&&<p className="text-red-400 text-[13px]">{errors?.code?.message}</p>}

        </div>
         </div>

         <button className='flex items-center justify-center w-full py-[17px] bg-[#000000] text-[#fff] rounded-[30px] mt-[20px]' type="submit" >
              <img src={shoppingIcon} alt="bag"  className="w-[16px] h-[16px] mr-[16px]"/>
            Pay Now</button>
      </form>
    </div>
  )
}

export default PaymentModal