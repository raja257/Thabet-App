"use client"
import Link from 'next/link'
import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { RiChat3Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { MdOutlineCancel, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { SlPeople } from "react-icons/sl";
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';

const DetailsGrade = () => {
  const students = [
    {
      id: 1,
      initials: "SK",
      name: "Sarah Khalid",
      status: "No certificates",
      statusIcon: <MdOutlineCancel className="text-[#C7110E] text-[18px]" />,
    },
    {
      id: 2,
      initials: "JK",
      name: "John Kim",
      status: "Certificate pending",
      statusIcon: (
        <span className="flex justify-center items-center w-[13px] h-[13px] rounded-full border-[1px] border-[#2C8D38]">
          <TiTick className="text-[#2C8D38] text-[18px]" />
        </span>
      ),
    },

    {
      id: 3,
      initials: "SK",
      name: "Sarah Khalid",
      status: "No certificates",
      statusIcon: <MdOutlineCancel className="text-[#C7110E] text-[18px]" />,
    },
    {
      id: 4,
      initials: "JK",
      name: "John Kim",
      status: "Certificate pending",
      statusIcon: (
        <span className="flex justify-center items-center w-[13px] h-[13px] rounded-full border-[1px] border-[#2C8D38]">
          <TiTick className="text-[#2C8D38] text-[18px]" />
        </span>
      ),
    },
 
  ];
  return (
    <>
    <div className='w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-4'>
        <Link href="/grade">
        <h2 className='flex items-center gap-2 text-[#FFFFFF] text-[18px] font-bold cursor-pointer'><IoArrowBackSharp className="text-[20px] font-bold" /> Grade 4 - Math</h2> 
        </Link>
     
     
    </div>
    <div className='w-full px-3 my-[16px]'>
       <div className='card w-full bg-[#F6F7F7] border-[1px] border-[#E1E6E4] rounded-[8px] py-3 px-2 flex justify-between mb-[6px]'> 
         <div className='flex items-center gap-2'>
            <Image src="/grade-math/grade-person-icon.svg" alt='' width={20} height={20}  />
            <h3 className='text-[#5C7069] text-[12px] font-medium'>Today’s Attendance</h3>
         </div>
         <div className='flex items-center gap-1'>
           
            <h3 className='text-[#000000] text-[12px] font-medium'>28 students | 2 absent</h3>
            <MdOutlineKeyboardArrowRight className='text-[20px]'  />
         </div>
       </div>
       <div className='card w-full bg-[#F6F7F7] border-[1px] border-[#E1E6E4] rounded-[8px] py-3 px-2 flex justify-between mb-[6px]'> 
         <div className='flex items-center gap-2'>
         <Image src="/grade-math/grade-notif-icon.svg" alt='' width={20} height={20}  />
            <h3 className='text-[#5C7069] text-[12px] font-medium'>Certificates Needed</h3>
         </div>
         <div className='flex items-center gap-1'>
           
            <h3 className='text-[#000000] text-[12px] font-medium'>2 pending</h3>
            <MdOutlineKeyboardArrowRight className='text-[20px]'  />
         </div>
       </div>
       <div className='card w-full bg-[#F6F7F7] border-[1px] border-[#E1E6E4] rounded-[8px] py-3 px-2 flex justify-between mb-[6px]'> 
         <div className='flex items-center gap-2'>
         <Image src="/grade-math/grade-chat-icon.svg" alt='' width={20} height={20}  />
            <h3 className='text-[#5C7069] text-[12px] font-medium'>Messages</h3>
         </div>
         <div className='flex items-center gap-1'>
           
            <h3 className='text-[#000000] text-[12px] font-medium'>1 unread from parents</h3>
            <MdOutlineKeyboardArrowRight className='text-[20px]'  />
         </div>
       </div>
    </div>
    <div className='w-full bg-[#E1E6E4] rounded-t-[24px] py-5 px-5'>
    <div className="search-bar relative">
          <input
            type="search"
            placeholder="Search students"
            className="w-full pl-8 py-3 border-[1px] border-[#E1E6E4] rounded-[8px] placeholder:text-[#5C7069]"
          />
          <FiSearch className="absolute top-4 text-[#C2CDC8] text-[18px] left-2" />
        </div>

        <div className="w-full mt-[12px]">
          {students.map((student) => (
            <div
              key={student.id}
              className="card mb-[8px] w-full flex justify-between items-center cursor-pointer bg-[#FFFFFF] py-2 px-2 rounded-[12px]"
           
            >
              <div className="flex gap-4">
                <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] text-[#768B82] text-[16px] font-bold bg-[#E1E6E4]">
                  {student.initials}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <h2 className="text-[#000000] text-[16px] font-medium">
                      {student.name}
                    </h2>
                    <span>{student.statusIcon}</span>
                  </div>
                  <span className="text-[#768B82] text-[12px] font-normal">
                    {student.status}
                  </span>
                </div>
              </div>
              <MdOutlineKeyboardArrowRight className="text-[#C2CDC8] text-[24px]" />
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default DetailsGrade