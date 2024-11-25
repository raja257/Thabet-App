import Image from 'next/image'
import React from 'react'
import { FiBell } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";

const Profile = () => {
  return (
    <>
    <div className='w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] h-[278px] py-5 px-5'>
     <div className='w-full flex items-center justify-between'>
       <div className='flex gap-3'>
        <Image src='/Profile/school-profile-image.svg' alt='' width={40} height={40} className='rounded-full'   />
        <div>
        <span className='text-[#C2CDC8] text-[12px] font-normal'>Good Morning,</span>
        <h2 className='text-[#FFFFFF] text-[14px] font-medium '>Mr. Afsal! 👋</h2>
        </div>
      
        </div> 
     <FiBell  className='text-[#FFFFFF] text-[20px]' />
      </div>   
     <div className='w-full flex flex-wrap gap-4 my-[16px]'>
       <div className='w-[47%] py-2 border-[2px] rounded-[12px] bg-[#FFFFFF] custom px-[12px]'>
        <div className='w-full flex justify-between'>
         <span className='text-[#171C1B] text-[24px] font-medium'>5</span>
         <Image src='/Profile/profile-card-class.svg' alt='' width={30} height={30}  className=''  />
        </div>
        <p className='text-[#485952] text-[12px] font-medium'>Classes Today</p>
       </div>
       <div className='w-[47%] py-2 border-[2px] rounded-[12px] bg-[#FFFFFF] custom px-[12px]'>
        <div className='w-full flex justify-between'>
         <span className='text-[#171C1B] text-[24px] font-medium'>5</span>
         <Image src='/Profile/profile-card-person.svg' alt='' width={30} height={30}  className=''  />
        </div>
        <p className='text-[#485952] text-[12px] font-medium'>Total Students</p>
       </div>
       <div className='w-[47%] py-2 border-[2px] rounded-[12px] bg-[#FFFFFF] custom px-[12px]'>
        <div className='w-full flex justify-between'>
         <span className='text-[#171C1B] text-[24px] font-medium'>5</span>
         <Image src='/Profile/profile-card-attandence.svg' alt='' width={30} height={30}  className=''  />
        </div>
        <p className='text-[#485952] text-[12px] font-medium'>Pending Attendance</p>
       </div>
       <div className='w-[47%] py-2 border-[2px] rounded-[12px] bg-[#FFFFFF] custom px-[12px]'>
        <div className='w-full flex justify-between'>
         <span className='text-[#171C1B] text-[24px] font-medium'>5</span>
         <Image src='/Profile/profile-card-message.svg' alt='' width={30} height={30}  className=''  />
        </div>
        <p className='text-[#485952] text-[12px] font-medium'>Unread Messages</p>
       </div>
     </div>
    </div>

    <div className='w-full py-[16px] px-5'>
       <p className='text-[#3C4945] text-[12px] font-normal'>Today - Thu, 07 November</p>
      <div className='w-full mt-[8px]'>
        <div className='flex items-center gap-3'>
         <FaRegClock className='text-[#485952] text-[14px]' />
         <span className='text-[#485952] text-[14px] font-medium'>9 AM - 10 AM</span>
        </div>
        <div className='w-full flex justify-end mt-[8px]'>
        <div className='w-[95%] border-[1px] border-[#E1E6E4] rounded-[12px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F1F7F5_100%)]  py-3 px-3'>
        <div className='w-full flex items-center justify-between'>
         <span className='text-[#A41210] text-[12px] font-normal'>Grade 4</span>
         <button className='text-[#2C8D38] text-[12px] font-medium border-[1px] border-[#2C8D38] rounded-[4px] py-0.5 px-2'>Completed</button>
        </div>    
        <h1 className='text-[#171C1B] text-[16px] font-medium'>Mathematics</h1>
        <div className='flex justify-between mt-[8px]'>
            <div className='flex items-center gap-2'>
                <Image src='/Profile/profile-card-room.svg' alt='' width={20} height={20} className=''  />
                <h3 className='text-[#485952] text-[12px] font-normal'>Room <span className='text-[#485952] text-[14px] font-medium'>A3</span></h3>
            </div>
            <div className='flex items-center gap-2'>
                <Image src='/Profile/profile-card-person.svg' alt='' width={20} height={20} className=''  />
                <h3 className='text-[#485952] text-[12px] font-normal'>Students <span className='text-[#485952] text-[14px] font-medium'>25</span></h3>
            </div>
        </div>
        <div className='w-full flex justify-end mt-[8px]'>
            <button className='text-[#262C2A] text-[14px] font-medium border-[1px] border-[#171C1B] rounded-[6px] py-1.5 px-3'>View Students</button>

        </div>
         
        </div>
        </div>
     
      </div> 
      <div className='w-full mt-[8px]'>
        <div className='flex items-center gap-3'>
         <FaRegClock className='text-[#485952] text-[14px]' />
         <span className='text-[#485952] text-[14px] font-medium'>9 AM - 10 AM</span>
        </div>
        <div className='w-full flex justify-end mt-[8px]'>
        <div className='w-[95%] border-[1px] border-[#E1E6E4] rounded-[12px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F1F7F5_100%)]  py-3 px-3'>
        <div className='w-full flex items-center justify-between'>
         <span className='text-[#A41210] text-[12px] font-normal'>Grade 4</span>
         <button className='text-[#D6A730] text-[12px] font-medium border-[1px] border-[#D6A730] rounded-[4px] py-0.5 px-2'>Pending</button>
        </div>    
        <h1 className='text-[#171C1B] text-[16px] font-medium'>Mathematics</h1>
        <div className='flex justify-between mt-[8px]'>
            <div className='flex items-center gap-2'>
                <Image src='/Profile/profile-card-room.svg' alt='' width={20} height={20} className=''  />
                <h3 className='text-[#485952] text-[12px] font-normal'>Room <span className='text-[#485952] text-[14px] font-medium'>A3</span></h3>
            </div>
            <div className='flex items-center gap-2'>
                <Image src='/Profile/profile-card-person.svg' alt='' width={20} height={20} className=''  />
                <h3 className='text-[#485952] text-[12px] font-normal'>Students <span className='text-[#485952] text-[14px] font-medium'>25</span></h3>
            </div>
        </div>
        <div className='w-full flex flex-wrap justify-between  mt-[8px]'>
            <button className='text-[#FFFFFF] text-[14px] font-medium border-[1px] border-[#171C1B] rounded-[6px] py-1.5 px-3 bg-[linear-gradient(0deg,_#2C8D38,_#2C8D38),_linear-gradient(0deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.2)_100%)]'>Mark Attendance</button>
            <button className='text-[#262C2A] text-[14px] font-medium border-[1px] border-[#171C1B] rounded-[6px] py-1.5 px-3'>View Students</button>

        </div>
         
        </div>
        </div>
     
      </div> 
      <div className='w-full mt-[8px]'>
        <div className='flex items-center gap-3'>
         <FaRegClock className='text-[#485952] text-[14px]' />
         <span className='text-[#485952] text-[14px] font-medium'>9 AM - 10 AM</span>
        </div>
        <div className='w-full flex justify-end mt-[8px]'>
        <div className='w-[95%] border-[1px] border-[#E1E6E4] rounded-[12px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F1F7F5_100%)]  py-3 px-3'>
        <div className='w-full flex items-center justify-between'>
         <span className='text-[#A41210] text-[12px] font-normal'>Grade 4</span>
         <button className='text-[#D6A730] text-[12px] font-medium border-[1px] border-[#D6A730] rounded-[4px] py-0.5 px-2'>Pending</button>
        </div>    
        <h1 className='text-[#171C1B] text-[16px] font-medium'>Mathematics</h1>
        <div className='flex justify-between mt-[8px]'>
            <div className='flex items-center gap-2'>
                <Image src='/Profile/profile-card-room.svg' alt='' width={20} height={20} className=''  />
                <h3 className='text-[#485952] text-[12px] font-normal'>Room <span className='text-[#485952] text-[14px] font-medium'>A3</span></h3>
            </div>
            <div className='flex items-center gap-2'>
                <Image src='/Profile/profile-card-person.svg' alt='' width={20} height={20} className=''  />
                <h3 className='text-[#485952] text-[12px] font-normal'>Students <span className='text-[#485952] text-[14px] font-medium'>25</span></h3>
            </div>
        </div>
        <div className='w-full flex flex-wrap justify-between  mt-[8px]'>
            <button className='text-[#FFFFFF] text-[14px] font-medium border-[1px] border-[#171C1B] rounded-[6px] py-1.5 px-3 bg-[linear-gradient(0deg,_#2C8D38,_#2C8D38),_linear-gradient(0deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.2)_100%)]'>Mark Attendance</button>
            <button className='text-[#262C2A] text-[14px] font-medium border-[1px] border-[#171C1B] rounded-[6px] py-1.5 px-3'>View Students</button>

        </div>
         
        </div>
        </div>
     
      </div> 
    </div>
    </>
  )
}

export default Profile