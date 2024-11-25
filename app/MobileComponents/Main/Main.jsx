import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
   <>
     <div className='w-full flex justify-center bg-[url("/welcome-page/background-main.png")]'>
        <div className='flex justify-center items-center flex-col py-5'>
    <Image src="/welcome-page/School-logo.svg"  alt="" width={50} height={50} className='w-[71px] h-[71px]' />
     <h2 className='text-[#171C1B] text-[24px] font-medium text-center pt-[16px] max-w-[230px]'>Welcome to Jamila Bint Thabet</h2>
     <span className='text-[#485952] text-[12px] font-medium pt-[12px]'>Please select your role to continue.</span>
        </div>
    
    </div>
   </>
  )
}

export default Main