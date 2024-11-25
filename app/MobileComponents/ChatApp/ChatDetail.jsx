import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";

const ChatDetail = () => {
  return (
    <>
     <div className='w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-5'>
     <div className='main-profile-bell w-full flex items-center justify-between'>
        <div className='flex items-center text-[#FFFF] gap-2'>
         <Link href="/chats">
         
         <FaArrowLeft className="text-[22px] text-[#C2CDC8]" />
         </Link>   
       <div className='flex gap-3'>
        <Image src='/chat/dp.svg' alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-[12px]'   />
        <div>
        <h2 className='text-[#FFFFFF] text-[14px] font-medium '>Amira Khalid</h2>
        <span className='text-[12px] text-[#C4EEC9] font-medium'>Parent</span>
        </div>
      
        </div> 
        </div>
     <BiPhoneCall  className='text-[#FFFFFF] text-[24px]' />
      </div>   

    </div>
    <div className='w-full flex items-center gap-5 px-5 py-4 border-b-[1px] border-[#E1E6E4]'>
    <div className='flex items-center gap-3'>
        <Image src='/chat/student3-dp.svg' alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-[12px]'   />
        <div>
        <h2 className='text-[#000000] text-[14px] font-medium '>Sarah Khalid</h2>
       
        </div>
      
        </div> 
        <button className='text-[12px] text-[#5C7069] font-medium px-4 py-2 border-[1px] border-[#E1E6E4] bg-[#F6F7F7] rounded-full'>Class 4A</button>
    </div>

    <div className="w-full py-10 px-5">
  <h1 className="text-[#B6BBB8] text-[14px] font-semibold text-center">Today</h1>
  <div>
  <div className=" gap-3 bg-[#E1E6E4] rounded-t-[12px] rounded-br-[12px] py-4 px-3 inline-flex mt-[12px] break-words">
    <h3 className="text-[#262C2A] text-[16px] font-medium break-words">
      Hello
    </h3>
    <span className="text-[#768B82] text-[8px] font-semibold whitespace-nowrap pt-1">10:17 AM</span>
  </div>
  </div>
  <div className='flex justify-end'>
  <div className=" gap-3 bg-[#262C2A] rounded-t-[12px] rounded-bl-[12px] py-4 px-3 inline-flex mt-[12px] break-words">
    <h3 className="text-[#FFFFFF] text-[16px] font-medium break-words">
    Hello! 👋
    </h3>
    <span className="text-[#768B82] text-[8px] font-semibold whitespace-nowrap pt-1">10:17 AM</span>
  </div>
  
  </div>
  <div>
  <div className=" gap-3 bg-[#E1E6E4] rounded-t-[12px] rounded-br-[12px] py-4 px-3 inline-flex mt-[12px] break-words">
    <h3 className="text-[#262C2A] text-[16px] font-medium break-words">
    Of course! I’ll send a few worksheets with online links
    </h3>
    <span className="text-[#768B82] text-[8px] font-semibold whitespace-nowrap pt-1">10:17 AM</span>
  </div>
  </div>
 
</div>

    </>
  )
}

export default ChatDetail