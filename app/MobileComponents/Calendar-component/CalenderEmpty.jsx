"use client"
import Image from "next/image";
import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const CalenderEmpty = () => {
  const [selectedDay, setSelectedDay] = useState(3);
  const days = Array.from({ length: 30 }, (_, i) => i + 1); // Generate 30 days for example.
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };
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
     <div className='w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-4'>
      <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Calendar</h2>  
      <p className='text-[#9CACA6] text-[14px] font-normal pt-[2px]'>Schedule and upcoming events.</p>
    </div>
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-5 px-4">
      {/* Navigation */}
      <div className="flex justify-between items-center w-full max-w-md mb-4">
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

      {/* Scrollable Days */}
      <div className="w-full max-w-md overflow-x-auto">
        <div className="flex space-x-4">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`flex flex-col items-center p-2 min-w-[40px]  rounded-lg`}
            >
              <span className={`text-sm  font-normal ${
                selectedDay === day
                  ? " text-[#2C8D38] font-medium"
                  : "text-[#3C4945]"
              }`}>{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day % 7]}</span>
              <span className={`pt-1 ${
                selectedDay === day
                  ? " text-[#2C8D38] font-medium w-[30px] h-[30px] bg-[#C4EEC9] rounded-[8px]"
                  : "text-[#3C4945]"
              }`}>{day}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-20 text-center">
        <div className="flex justify-center mb-4">
          <Image src='/calendar/calender-empty.svg' alt="" width={100} height={100}  />
        </div>
        <h3 className="text-[22px] font-medium text-[#000000]">Your schedule is clear!</h3>
        <p className="text-[14px] text-[#5C7069] font-normal mt-2">
          Tap 'Add Event' to schedule your first meeting, quiz, or school activity.
        </p>
        <button className="mt-6 px-4 py-2  text-[18px] font-medium  text-[#3C4945] rounded-[8px] border-[1px] border-[#5C7069]">
          + Add Event
        </button>
      </div>
    </div>
    </>
  );
};

export default CalenderEmpty;
