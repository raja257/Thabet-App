"use client"
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineCancel, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { BiCheckDouble } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { RiChat3Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { CgLoadbar } from "react-icons/cg";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const SingleGradeTabContent = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State for the selected card

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

  const handleCardClick = (student) => {
    setSelectedCard(student);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(""); 
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i.toString());
  }
  const handlePrevMonth = () => {
    const newDate = new Date(year, month - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(year, month + 1);
    setCurrentDate(newDate);
  };

  return (
    <>
      <div className="w-full pb-10">
        <div className="search-bar relative">
          <input
            type="search"
            placeholder="Search students"
            className="w-full pl-8 py-3 border-[1px] border-[#E1E6E4] rounded-[8px] placeholder:text-[#5C7069]"
          />
          <FiSearch className="absolute top-4 text-[#C2CDC8] text-[18px] left-2" />
        </div>

        <div className="w-full mt-[16px]">
          {students.map((student) => (
            <div
              key={student.id}
              className="card mb-[16px] w-full flex justify-between items-center cursor-pointer"
              onClick={() => handleCardClick(student)} 
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
      <div className="w-full flex justify-between relative bottom-0">
          <div className="w-[40px] h-[40px] border-[1px] border-[#FFC6C5] rounded-[8px] border-dotted flex justify-center items-center">
            <FiTrash2 className="text-[#C7110E] text-[18px]" />
          </div>
          <div className="w-[80%] h-[40px] bg-[#F6F7F7] border-[1px] border-dotted rounded-[8px] border-[#C2CDC8] flex justify-center items-center">
            <h3 className="flex items-center gap-1 text-[#171C1B] text-[16px] font-medium">
              <FaPlus />
              New
            </h3>
          </div>
        </div>
        {selectedCard && (
          <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50">
            <div className="bg-white w-[100%] px-6 rounded-t-[24px] shadow-lg ">
              <div className="flex justify-center py-2"><CgLoadbar  className="text-[#C2CDC8] text-[24px]" /> </div>
            <div className='w-full user flex items-center gap-3 mt-[12px]'>
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] text-[#768B82] text-[16px] font-bold bg-[#E1E6E4]">
                  {selectedCard.initials}
                </div>
        <div>
        <h2 className='text-[#171C1B] text-[18px] font-medium '>{selectedCard.name}</h2>
        <span className='text-[12px] text-[#485952] font-medium'>Parent</span>
        </div>
      
            </div> 
            <div className="parent-contact w-full mt-1" >  
            <span className="text-[#768B82] text-[12px] font-medium">Parent Contact</span>
            <div className="w-full flex justify-between"> 
            <div> 
              <h2 className="text-[18px] font-medium text-[#171C1B]">Amira Khalid</h2>
              <span className="text-[#3C4945] text-[16px] font-medium">+971 50 123 4567</span>
            </div>
            <div className="flex gap-3"> 
              <button className="flex justify-center items-center w-[44px] h-[44px] rounded-[8px] bg-[#262626]"><RiChat3Line className="text-[#ffff] text-[20px]" /></button>
              <button className="flex justify-center items-center w-[44px] h-[44px] rounded-[8px] bg-[#E5283F]"><BiPhoneCall className="text-[#ffff] text-[20px]" /></button>
            </div>
            </div>
            </div>
            <div className="records w-full mt-[12px]"> 
              <div className="w-full border-[1px] border-[#E1E6E4] rounded-[8px] py-3 mb-[6px] flex items-center justify-between px-3"> 
              <h4 className="text-[#485952] text-[14px] font-normal ">Attendance Today</h4>
              <span className="flex items-center gap-2 text-[#000000] text-[14px] font-normal"><MdOutlineCancel className="text-[#C7110E] text-[18px]"/>Absent</span>
              </div>
              <div className="w-full border-[1px] border-[#E1E6E4] rounded-[8px] py-3 mb-[6px] flex items-center justify-between px-3"> 
              <h4 className="text-[#485952] text-[14px] font-normal ">Total Attendance</h4>
              <span className="flex items-center gap-2 text-[#2C8D38] text-[14px] font-medium">85%</span>
              </div>
              <div className="w-full border-[1px] border-[#E1E6E4] rounded-[8px] py-3 mb-[6px] flex items-center justify-between px-3"> 
              <h4 className="text-[#485952] text-[14px] font-normal ">Certificates Uploaded</h4>
              <span className="flex items-center gap-2 text-[#2C8D38] text-[14px] font-medium">None</span>
              </div>
            </div>
            <div className="Date-picker w-full"> 
            <div className="p-4 max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="w-[32px] h-[32px] bg-[#E1E6E4] rounded-[4px] flex justify-center items-center"
        >
          <span className="material-icons"><MdArrowBackIos className="text-[#5C7069]" /></span>
        </button>
        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="w-[32px] h-[32px] bg-[#E1E6E4] rounded-[4px] flex justify-center items-center"
        >
          <span className=""><MdArrowForwardIos className="text-[#5C7069]" /></span>
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 text-center">
        {dayNames.map((day) => (
          <div key={day} className="font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 text-center gap-1 mt-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`w-full h-10 flex items-center justify-center ${
              day ? "text-black" : "text-transparent"
            }`}
          >
            <span className="text-sm font-medium">{day}</span>
          </div>
        ))}
      </div>
    </div>
           

            </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 bg-[#C2CDC8] text-white rounded-[8px]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default SingleGradeTabContent;
