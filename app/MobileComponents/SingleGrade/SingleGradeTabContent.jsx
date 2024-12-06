"use client"
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineCancel, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { CgLoadbar } from "react-icons/cg";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
const SingleGradeTabContent = ({students,_id,handlegetStudent}) => {
  const [selectedCard, setSelectedCard] = useState(null); 
  const [popupVisible, setPopupVisible] = useState(false); 
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [userData, setUserData] = useState(null);
  const ids=userData?._id
  useEffect(() => {
    const data =JSON.parse(localStorage.getItem("userData")) ;
 if (data) { setUserData(data); } 
  }, []);
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
    days.push(""); }
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
      handlegetStudent()
      setSelectedStudent([]); // Clear selected students after successful submission
      closePop(); // Close popup
    } catch (error) {
      console.log("Error sending student data:", error.message);
      alert("There was an error sending the student data. Please try again.");
    }
  };
  const [addStudent,setAddStudent]=useState([])
  const fetchStudent=async()=>{
    const response=await fetch("http://localhost:8000/user/get_students")
    const data=await response.json()
    console.log(data.students,"apii fetch")
    setAddStudent(data.students)
  }
  useEffect(()=>{
    fetchStudent()
  },[])
  const [attendance, setAttendance] = useState([]);
   console.log(attendance,"attendance")
   const [getattendance,setGetAttendance] = useState([]);
   console.log(getattendance,"getAttendance")
const handleDateClick = (day) => {
  if (day) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      .toISOString()
      .split("T")[0];
    if (!attendance.includes(date)) {
      setAttendance((prev) => [...prev, date]);
    }
    
  }
};
//Api of Add Attendance function
const addAttendanceFn = async () => {
  for (const date of attendance) {
    const body = {
      student_id: selectedCard._id, 
      date: date, 
    };
    try {
      const response = await fetch("http://localhost:8000/user/add_attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("Failed to add attendance");
      }

      const result = await response.json();
      console.log("datte added successfully:", result);
      fetchAttandance()
    } catch (error) {
      console.log(`Error adding attendance for date ${date}:`, error);
    }
  }
  setAttendance([]);

};
const fetchAttandance=async()=>{
  try {
    const response = await fetch("http://localhost:8000/user/get_attendance", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ student_id: selectedCard._id}),
          });
  
          if (!response.ok) {
            throw new Error("Failed to save grade");
          }
  
          const result = await response.json();
          console.log("attannnnnnnn gettttt  successfully:", result.get_data);
          setGetAttendance(result.get_data)

          
        } catch (error) {
          console.log("Error saving grade:", error.message);
          alert("There was an error saving the grade. Please try again.");
        }
}
  const fileInputRef = useRef(null); 
const [certificate, setCertificates] = useState([]);

const handleFileUpload = (e) => {
  const files = e.target.files;
  const pdfFiles = Array.from(files).filter((file) => file.type === "application/pdf");

  if (pdfFiles.length > 0) {
    const certificatesToUpload = pdfFiles.map((file) => ({
      name: file.name,
    }));

    // Update the certificates state with just the `name` property from each file
    setCertificates((prevCertificates) => [...prevCertificates, ...certificatesToUpload.map(cert => cert.name)]);

    uploadCertificate(certificatesToUpload.map(cert => cert.name)); // Pass only the names
  } else {
    alert("Please upload only PDF files.");
  }
};

const uploadCertificate = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/user/certificate_upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: selectedCard._id,
        certificate: data, 
        teacher_id: ids,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to upload certificate");
    }

    const result = await response.json();
    console.log("Certificates uploaded successfully:", result);
    fetchAttandance();
  } catch (error) {
    console.error("Error uploading certificates:", error);
  }
};

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
      <div className="w-full flex justify-center relative bottom-0">
       
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
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] text-[#768B82] text-[16px] font-bold bg-[#E1E6E4] uppercase">
            { selectedCard.full_name.split(" ").map(name => name.charAt(0)).join(" ")}
                </div>
        <div>
        <h2 className='text-[#171C1B] text-[18px] font-medium capitalize'>{selectedCard.full_name}</h2>
        </div>
            </div> 
            <div className="Date-picker w-full"> 
            <div className="p-4 max-w-md mx-auto">
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
      {days.map((day, index) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
          .toISOString()
          .split('T')[0];
        const isSelected = attendance.includes(date);
        const isFetched = getattendance.some((fetchedDate) => fetchedDate === isSelected );
          return (
            <div
              key={index}
              onClick={() => handleDateClick(day)}
              className={`w-full h-10 flex items-center justify-center cursor-pointer rounded ${
                day
                  ? isSelected && isFetched
                    ? 'bg-blue-500 text-white'
                    : isSelected
                    ? 'bg-green-500 text-white' 
                    : isFetched
                    ? 'bg-blue-300 text-black' 
                    : 'text-black hover:bg-gray-200' 
                  : 'text-transparent'
              }`}
            >
              <span className="text-sm font-medium">{day}</span>
            </div>
          );
        })}
      </div>
    </div>

     <button
      onClick={addAttendanceFn}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "20px",
      }}
    >
      Submit Attendance
    </button>
            </div>
            <div className="my-4 w-full">
      <button
        onClick={() => fileInputRef.current.click()} // Use the ref to trigger the input
        className="flex items-center justify-center gap-2 w-full py-2 bg-[#262626] text-white rounded-[8px]"
      >
        <MdOutlineFileUpload className="text-[24px]" /> Upload Certificate
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        multiple
        className="hidden"
        onChange={handleFileUpload}
      />
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
              { student.name.split(" ").map(name => name.charAt(0)).join(" ")}
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
