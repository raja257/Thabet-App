import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Grade = () => {
  return ( 
    <>
    <div className='w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-4'>
      <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Your Grade</h2>  
      <p className='text-[#9CACA6] text-[14px] font-normal pt-[2px]'>Manage students, attendance, and certificates.</p>
    </div>
    <div className='w-full mt-[16px] px-4'>
      <div className='card w-full bg-[#E1E6E4] rounded-[12px] py-5 px-4 mb-[8px]'>
       <h2 className='text-[20px] font-medium text-[#000000]'>Grade 6</h2>
       <div className='w-full flex flex-wrap gap-3 mt-[8px]'>
        <button className='w-[30%] py-2 px-1 bg-[#FFFFFF] rounded-[8px] text-[#485952] text-[12px] font-medium'>Mathematics</button>
        <button className='w-[30%] py-2 px-1 bg-[#FFFFFF] rounded-[8px] text-[#485952] text-[12px] font-medium'>English</button>
        <button className='w-[30%] py-2 px-1 bg-[#FFFFFF] rounded-[8px] text-[#485952] text-[12px] font-medium'>Science</button>

       </div>
      </div>
      <div className='card w-full bg-[#E1E6E4] rounded-[12px] py-5 px-4 mb-[8px]'>
       <h2 className='text-[20px] font-medium text-[#000000]'>Grade 7</h2>
       <div className='w-full flex flex-wrap gap-3 mt-[8px]'>
        <button className='w-[30%] py-2 px-1 bg-[#FFFFFF] rounded-[8px] text-[#485952] text-[12px] font-medium'>Mathematics</button>
        <button className='w-[30%] py-2 px-1 bg-[#FFFFFF] rounded-[8px] text-[#485952] text-[12px] font-medium'>English</button>
        <button className='w-[30%] py-2 px-1 bg-[#FFFFFF] rounded-[8px] text-[#485952] text-[12px] font-medium'>Science</button>

       </div>
      </div>
      <div className='card w-full bg-[#E1E6E4] rounded-[12px] py-5 px-4 mb-[8px]'>
       <h2 className='text-[20px] font-medium text-[#000000]'>Grade 8</h2>
       <div className='w-full flex flex-wrap gap-3 mt-[8px]'>
        <button className='w-[30%] py-2 px-1 bg-[#FFFFFF] rounded-[8px] text-[#485952] text-[12px] font-medium'>Physical Education</button>
        <button className='w-[30%] py-2 px-1 bg-[#FFFFFF] rounded-[8px] text-[#485952] text-[12px] font-medium'>English</button>
        <button className='w-[30%] py-2 px-1 bg-[#FFFFFF] rounded-[8px] text-[#485952] text-[12px] font-medium'>Computer Science</button>

       </div>
      </div>
    
      <div className="w-full mt-20 pb-3">
   
     <div className='w-full h-[40px] bg-[#F6F7F7] border-[1px] border-dotted rounded-[8px] border-[#C2CDC8] flex justify-center items-center'>
      <h3 className='flex items-center gap-1 text-[#171C1B] text-[16px] font-medium'><FaPlus />New Grade</h3>
     </div>
    </div>
    </div>

    </>
  )
}

export default Grade