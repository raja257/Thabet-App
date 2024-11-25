import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Main from '../Main/Main';

const Welcome = () => {
  return (
    <>
    <Main />

    <div className='container px-5 mt-3'>
     <div className='w-full h-[72px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[12px] flex items-center justify-between px-3 mb-[8px]'>
        <div className='flex items-center gap-5'>
        <Image src='/welcome-page/welcome-screen-home.svg' alt='' width={40} height={40} className=''   />
         <h2 className='text-[16px] text-[#171C1B] font-medium'>i’m a parent</h2>
        </div>
        <IoIosArrowForward  />
     </div>
     <div className='w-full h-[72px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[12px] flex items-center justify-between px-3 mb-[8px]'>
        <div className='flex items-center gap-5'>
        <Image src='/welcome-page/welcome-screen-teacher.svg' alt='' width={40} height={40} className=''   />
         <h2 className='text-[16px] text-[#171C1B] font-medium'>i’m a teacher</h2>
        </div>
        <IoIosArrowForward  />
     </div>
     <div className='w-full h-[72px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[12px] flex items-center justify-between px-3 mb-[8px]'>
        <div className='flex items-center gap-5'>
        <Image src='/welcome-page/welcome-screen-student.svg' alt='' width={40} height={40} className=''   />
         <h2 className='text-[16px] text-[#171C1B] font-medium'>i’m a student</h2>
        </div>
        <IoIosArrowForward  />
     </div>
    </div>   
    </>
  )
}

export default Welcome