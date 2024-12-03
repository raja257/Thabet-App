"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegClock } from "react-icons/fa";

const CalenderEmpty = () => {
  const [selectedDay, setSelectedDay] = useState(3);
  console.log(selectedDate)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const handleDayClick = (day) => setSelectedDay(day);
  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1));

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");
  const [start_date, setStartDate] = useState(new Date());
  const [end_date, setEndDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [sub_title, setSubtitle] = useState("");
  const [events, setEvents] = useState([]);
  const handleAddEvent = () => setIsPopupOpen(true);
  const [userData, setUserData] = useState(null);
  const _id = userData?._id;
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data) {
      setUserData(data);
    }
  }, []);

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setStartTime("");
    setEndTime("");
    setStartDate(new Date());
    setEndDate(new Date());
    setTitle("");
    setSubtitle("");
  };

  const handleSubmit = () => {
    if (
      !title ||
      !sub_title ||
      !start_time ||
      !end_time ||
      !start_date ||
      !end_date
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newEvent = {
      title,
      sub_title,
      start_time,
      end_time,
      start_date: start_date.toISOString().split('T')[0], 
    end_date: end_date.toISOString().split('T')[0],     
    };
    setEvents([...events, newEvent]);
    addCalenderData(newEvent,_id);
    handlePopupClose();
  };
  const fetchCalenderData = async (data, _id) => {
    data._id=_id
    const response = await fetch(
      "http://localhost:8000/calender/get_calender",
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    console.log(res, "calenderData");
    return res;
  };

  const addCalenderData = async (data, _id) => {
    data.teacher_id=_id
    const response = await fetch(
      "http://localhost:8000/calender/create_calender",
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    console.log(res, "calenderData");
    return res;
  };

  // const fetchCalenderData=async()=>{
  //   const response=await fetch(`http://localhost:8000/calender/get_calender`)
  //   const res=await response.json()
  //   console.log(res,"calenderData Get")
  //   return res
  // }
  useEffect(()=>{
    fetchCalenderData()
  },[])

  return (
    <>
      <div className="w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-4">
        <h2 className="text-[#FFFFFF] text-[18px] font-bold">Calendar</h2>
        <p className="text-[#9CACA6] text-[14px] font-normal pt-[2px]">
          Schedule and upcoming events.
        </p>
      </div>
      <div className="flex flex-col items-center bg-gray-50 py-5 px-4">
        {/* Navigation */}
        <div className="flex justify-between items-center w-full max-w-md mb-4">
          <button
            onClick={handlePrevMonth}
            className="w-[32px] h-[32px] bg-[#E1E6E4] rounded-[4px] flex justify-center items-center"
          >
            <MdArrowBackIos className="text-[#5C7069]" />
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
            <MdArrowForwardIos className="text-[#5C7069]" />
          </button>
        </div>

        {/* Scrollable Days */}
        <div className="w-full max-w-md overflow-x-auto">
          <div className="flex space-x-4">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                className={`flex flex-col items-center p-2 min-w-[40px] rounded-lg`}
              >
                <span
                  className={`text-sm font-normal ${
                    selectedDay === day
                      ? "text-[#2C8D38] font-medium"
                      : "text-[#3C4945]"
                  }`}
                >
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day % 7]}
                </span>
                <span
                  className={`pt-1 ${
                    selectedDay === day
                      ? "text-[#2C8D38] font-medium w-[30px] h-[30px] bg-[#C4EEC9] rounded-[8px]"
                      : "text-[#3C4945]"
                  }`}
                >
                  {day}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 px-5">
        <h3 className="text-lg font-bold">Scheduled Events</h3>
        {events.map((event, i) => (
          <div className="w-full" key={i}>
            <div className="flex items-center gap-2 mt-2">
              <FaRegClock className="text-[#485952] text-[14px]" />
              <span className="text-[#485952] text-[14px] font-medium">
                {`Time: ${event.start_time} - ${event.end_time}`}
              </span>
            </div>
           
            <div className="w-full flex justify-end mt-3">
              <div className="w-[90%]">
                <h2 className="text-[#171C1B] text-[16px] font-medium">
                  {event.title}
                </h2>
                <p className="pt-2 text-[#171C1B] text-[12px] font-normal">
                  {event.sub_title}
                </p>
                <div className="flex items-center gap-2 mt-2">
              <span className="text-[#485952] text-[14px] font-medium">
                {`Dates: ${event.start_date} - ${event.end_date}`}
              </span>
            </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="mt-20 text-center px-5">
        <div className="flex justify-center mb-4">
          <Image
            src="/calendar/calender-empty.svg"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <h3 className="text-[22px] font-medium text-[#000000]">
          Your schedule is clear!
        </h3>
        <p className="text-[14px] text-[#5C7069] font-normal mt-2">
          Tap 'Add Event' to schedule your first meeting, quiz, or school
          activity.
        </p>
        <button
          className="mt-6 px-4 py-2  text-[18px] font-medium  text-[#3C4945] rounded-[8px] border-[1px] border-[#5C7069]"
          onClick={handleAddEvent}
        >
          + Add Event
        </button>
      </div>
      {/* Add Event Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold">Add Event</h2>
            <div className="mt-4">
              <label className="block font-medium mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full rounded"
              />

              <label className="block font-medium mt-4 mb-2">sub_title</label>
              <input
                type="text"
                value={sub_title}
                onChange={(e) => setSubtitle(e.target.value)}
                className="border p-2 w-full rounded"
              />

              <label className="block font-medium mt-4 mb-2">Start Time</label>
              <input
                type="time"
                value={start_time}
                onChange={(e) => setStartTime(e.target.value)}
                className="border p-2 w-full rounded"
              />

              <label className="block font-medium mt-4 mb-2">End Time</label>
              <input
                type="time"
                value={end_time}
                onChange={(e) => setEndTime(e.target.value)}
                className="border p-2 w-full rounded"
              />

              <label className="block font-medium mt-4 mb-2">Start Date</label>
              <DatePicker
                selected={start_date}
                onChange={(date) => setStartDate(date)}
                className="border p-2 w-full rounded"
              />

              <label className="block font-medium mt-4 mb-2">End Date</label>
              <DatePicker
                selected={end_date}
                onChange={(date) => setEndDate(date)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={handlePopupClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalenderEmpty;
