"use client"
import React, { useEffect, useState } from "react";
import { MdOutlineCancel, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiCheckDouble } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { RiChat3Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { CgLoadbar } from "react-icons/cg";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
const SingleGradeTabContent = ({students,_id}) => {
  console.log(_id,"datata")
  const [selectedCard, setSelectedCard] = useState(null); 
  const [popupVisible, setPopupVisible] = useState(false); 
  // const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState([]);
  console.log(selectedStudent)

//   const [userData, setUserData] = useState(null);
//   console.log(userData,"profile roles")
//   const id=userData?._id
//   console.log(id,"students")
//   useEffect(() => {
//     const data =JSON.parse(localStorage.getItem("userData")) ;
//  if (data) {
//       setUserData(data); 
//     } 
//   }, []);


  const data=students

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
  const handleViewStudent = () => {
    // setSelectedStudent(student); // Set the selected student
    setPopupVisible(true); 
  };

  const closePop = () => {
    setPopupVisible(false); 
    setSelectedStudent(null); 
  };

  const handleCheckboxToggle = (id) => {
    setSelectedStudent((prev) => {
      if (prev.includes(id)) {
        return prev.filter((studentId) => studentId !== id); 
      } else {
        return [...prev, id]; 
      }
    });
  };
  
  const handleSubmit = async () => {
    if (selectedStudent.length === 0) {
      alert("Please select at least one student to add.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8000/class/add_student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ classId: _id, newStudentsIds: selectedStudent }), 
      });
  
      if (!response.ok) {
        throw new Error("Failed to send student data");
      }
  
      const result = await response.json();
      console.log("Students added successfully:", result);
      alert("Students added successfully!");
      setSelectedStudent([]); // Clear selected students after successful submission
      closePop(); // Close popup
    } catch (error) {
      console.log("Error sending student data:", error.message);
      alert("There was an error sending the student data. Please try again.");
    }
  };
  
    // useEffect(()=>{
    //   handlegetStudent()
    // },[])
  const [addStudent,setAddStudent]=useState([])
  // const addStudent = [
  //   { id: 1, full_name: "Adil Nisar", initials: "AD" },
  //   { id: 2, full_name: "Sara Khan", initials: "SK" },
  // ];
  const fetchStudent=async()=>{
    const response=await fetch("http://localhost:8000/user/get_students")
    const data=await response.json()
    console.log(data.students,"apii fetch")
    setAddStudent(data.students)
  }
  useEffect(()=>{
    fetchStudent()
  },[])
  return (
    <>
      <div className="w-full pb-10">
        <div className="w-full mt-[16px]">
          {data.map((student,i) => (
            <div
              key={i}
              className="card mb-[16px] w-full flex justify-between items-center cursor-pointer"
              onClick={() => handleCardClick(student)} 
            >
              <div className="flex gap-4">
                <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] text-[#768B82] text-[16px] font-bold bg-[#E1E6E4] uppercase">
                  { student.full_name.split(" ").map(name => name.charAt(0)).join(" ")}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <h2 className="text-[#000000] text-[16px] font-medium capitalize">
                      {student.full_name}
                    </h2>
                    <span>{student.statusIcon}</span>
                  </div>
                
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
            <h3 className="flex items-center gap-1 text-[#171C1B] text-[16px] font-medium" onClick={()=>handleViewStudent()}>
              <FaPlus />
              New
            </h3>
          </div>
        </div>
     
        {selectedCard && (
          <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50" onClick={closePopup}>
            <div className="bg-white w-[100%] px-6 rounded-t-[24px] shadow-lg " onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-center py-2"><CgLoadbar  className="text-[#C2CDC8] text-[24px]" /> </div>
            <div className='w-full user flex items-center gap-3 mt-[12px]'>
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] text-[#768B82] text-[16px] font-bold bg-[#E1E6E4]">
                  {selectedCard.initials}
                </div>
        <div>
        <h2 className='text-[#171C1B] text-[18px] font-medium capitalize'>{selectedCard.full_name}</h2>
        <span className='text-[12px] text-[#485952] font-medium'>Parent</span>
        </div>
      
            </div> 
            {/* <div className="parent-contact w-full mt-1" >  
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
            </div> */}
            {/* <div className="records w-full mt-[12px]"> 
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
            </div> */}
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
              <div className="my-4 w-full">
                <button
                  onClick={closePopup}
                  className="flex items-center justify-center gap-2 w-full py-2 bg-[#262626] text-white rounded-[8px]"
                >
                <MdOutlineFileUpload className="text-[24px]" />  Upload Certificate
                </button>
              </div>
            </div>
          </div>
        )}
  {popupVisible && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
      <h2 className="text-lg font-bold mb-4">Student Details</h2>
      <div className="w-full mt-[16px]">
        {addStudent.map((student) => (
          <div
            key={student._id}
            className="card mb-[16px] w-full flex justify-between items-center cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] text-[#768B82] text-[16px] font-bold bg-[#E1E6E4] uppercase">
                {student.initials}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h2 className="text-[#000000] text-[16px] font-medium capitalize">
                    {student.name}
                  </h2>
                </div>
              </div>
            </div>
            <input
              type="checkbox"
              onChange={() => handleCheckboxToggle(student._id)}
              checked={Array.isArray(selectedStudent) && selectedStudent.includes(student._id)}
              />
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 w-full py-2 bg-green-500 text-white rounded"
      >
        Submit
      </button>
      <button
        onClick={closePop}
        className="mt-2 w-full py-2 bg-blue-500 text-white rounded"
      >
        Close
      </button>
    </div>
  </div>
)}


    </>
  );
};

export default SingleGradeTabContent;
