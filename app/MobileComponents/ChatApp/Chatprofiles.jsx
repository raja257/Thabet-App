"use client"
import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import AllchatContent from './AllchatContent';

const Chatprofiles = () => {
    const [activeTab, setActiveTab] = useState('All'); 

  return (
   <>
    <div className='w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-4'>
    <div className='search-bar relative'>
        <input type='search' placeholder='Find a student, parent, or group quickly.'  className='w-full pl-8 py-3 text-[14px] border-[1px] border-[#E1E6E4] rounded-[8px] placeholder:text-[#5C7069]' />
        < FiSearch className='absolute top-3.5 text-[#C2CDC8] text-[18px] left-2' />
    </div>
    </div>


    <div className="w-full mt-[16px] px-3">
        <div className="w-full h-[46px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[8px] flex justify-between items-center px-1">
          {['All', 'Parent', 'Student'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[16px] font-medium rounded-[6px] py-1.5 w-[30%] ${
                activeTab === tab ? 'bg-[#C7110E] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#171C1B] '
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4 p-3">
          {activeTab === 'All' && <div className='w-full'><AllchatContent /> </div>
          
          }
          {activeTab === 'Parent' && <div className='w-full'>ll </div>}
          {activeTab === 'Student' && <div className='w-full'>jkj </div>}
        </div>
      </div>

      
   </>
  )
}

export default Chatprofiles











     


