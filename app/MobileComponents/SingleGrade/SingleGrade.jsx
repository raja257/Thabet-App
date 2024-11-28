"use client"
import React, { useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import SingleGradeTabContent from './SingleGradeTabContent';
import Link from 'next/link';

const SingleGrade = () => {
    const [activeTab, setActiveTab] = useState('All'); 

  return (
    <>
    <div className='w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-4'>
        <Link href="/grade">
        <h2 className='flex items-center gap-2 text-[#FFFFFF] text-[18px] font-bold cursor-pointer'><IoArrowBackSharp className="text-[20px] font-bold" /> Grade 6</h2> 
        </Link>
     
      <p className='text-[#9CACA6] text-[14px] font-normal pt-[2px]'>Manage students, attendance, and certificates.</p>
    </div>
    
        <div className="mt-4 p-4">
        <SingleGradeTabContent />
         
        </div>
    </>
  )
}

export default SingleGrade

