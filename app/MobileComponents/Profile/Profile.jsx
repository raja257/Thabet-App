"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
const Profile = () => {
  const [studentperiod,setStudentPeriod]=useState([])
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupVisiblechild, setPopupVisiblechild] = useState(false); 
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [periods, setPeriods] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  console.log(selectedStudents)
  const [userData, setUserData] = useState(null);
  console.log(userData,"profile roles")
  const name = `${userData?.first_name || ''} ${userData?.last_name || ''}`.trim();
  const role = userData?.role;
  const id=userData?._id
  const [child,setChild]=useState([])
  let teacher_id = id;
  const handleGetPeriods = async (teacher_id) => {
    try {
      const response = await fetch("http://localhost:8000/class/get_periods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teacher_id }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch periods");
      }
      const result = await response.json();
      setPeriods(result.data);
    } catch (error) {
      console.error("Error fetching periods:", error.message);
      alert("There was an error fetching the periods. Please try again.");
    }
  };
  useEffect(() => {
    const data =JSON.parse(localStorage.getItem("userData")) ;
 if (data) {
      setUserData(data); 
      setTimeout(()=>{
        if(data.role=="teacher"){
          handleGetPeriods(data._id);
        }else if(data.role=="parent"){
          handleGetchild(data._id)
        }
      },[2000])
    }
  }, []);
  const handleGetchild = async (_id) => {
    try {
      const response = await fetch("http://localhost:8000/user/get_child", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch periods");
      }
      const result = await response.json();
      console.log(result,"child")
      setChild(result.data);
    } catch (error) {
      console.error("Error fetching periods:", error.message);
      alert("There was an error fetching the periods. Please try again.");
    }
  };
  const cardsData = periods.map((period) => ({
    time: `${period.subjects.start_time} - ${period.subjects.end_time}`,
    grade: period.class_name,
    status: { text: "Pending", color: "#D6A730" },
    subject: period.subjects.name,
    room: period.room || "N/A",
    students: period.students_count || 0,
    actions: [
      { text: "Mark Attendance", color: "#FFFFFF", bg: "#2C8D38" },
      { text: "View Students", color: "#262C2A", bg: "transparent" },
    ],
  }));
    const students = child.map((data, index) => ({
      id: data._id, 
      initials: data.name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .join(""), 
      fullName: data.name,
      grade: data.grade,
    }));
  const router=useRouter()
   const handleCertificate =(allstudents)=>{
    // router.push(`/profile/${allstudents}`);
    router.push(`/profile/certificate?reciever=${allstudents}`);
   }  
  const getStudentPeriods=async(student_id)=>{
    console.log(student_id,"iiddddddddd")
    try {
      const response = await fetch("http://localhost:8000/class/get_periods_by_student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id:student_id }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch periods");
      }
      const result = await response.json();
      console.log(result,"getperiodsStudents")
      setStudentPeriod(result.data);
    } catch (error) {
      console.error("Error fetching periods:", error.message);
      alert("There was an error fetching the periods. Please try again.");
    }
  }
  const handleViewStudent = (student) => {
    getStudentPeriods(student.id)
    setSelectedStudent(student); 
    setPopupVisible(true); 
  };
  const closePopup = () => {
    setPopupVisible(false); 
    setSelectedStudent(null);
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
  const handleAddChild = () => {
  // setSelectedStudent(student); // Set the selected student
    setPopupVisiblechild(true); 
  };
  const handleCheckboxToggle = (id) => {
    setSelectedStudents((prev) => {
      if (!prev) {
        return []; // Set to empty array if prev is null
      }
      if (prev.includes(id)) {
        // Remove id from the array
        return prev.filter((studentId) => studentId !== id);
      } else {
        // Add id to the array
        return [...prev, id];
      }
    });
  };
  const closePops = () => {
    setPopupVisiblechild(false); 
    setSelectedStudents(null); 
  };
  const handleSubmit = async () => {
    if (selectedStudents.length === 0) {
      alert("Please select at least one student to add.");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/user/childrens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ parent_id: id, student_ids: selectedStudents }), 
      });
  
      if (!response.ok) {
        throw new Error("Failed to send student data");
      }
  
      const result = await response.json();
      console.log("Students added successfully:", result);
      alert("Students added successfully!");
      handleGetchild(id)
      setSelectedStudents([]); 
      closePops(); 
    } catch (error) {
      console.log("Error sending student data:", error.message);
      alert("There was an error sending the student data. Please try again.");
    }
  };
  
  return (
    <>
      <div className="w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-5">
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src="/Profile/school-profile-image.svg"
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <span className="text-[#C2CDC8] text-[12px] font-normal">
                Good Morning,
              </span>
              <h2 className="text-[#FFFFFF] text-[14px] font-medium capitalize">
                {name} 👋
              </h2>
            </div>
          </div>
          <FiBell className="text-[#FFFFFF] text-[20px]" />
        </div>
      </div>
      <div>
    {(role === 'teacher' || role === 'student') && (
      <div className="w-full py-[16px] px-5 Teacher">
        <p className="text-[#3C4945] text-[12px] font-normal">
          Today - Thu, 07 November
        </p>
        {cardsData.map((card, index) => (
          <div className="w-full mt-[8px] card" key={index}>
            <div className="flex items-center gap-3">
              <FaRegClock className="text-[#485952] text-[14px]" />
              <span className="text-[#485952] text-[14px] font-medium">
                {card.time}
              </span>
            </div>

            <div className="w-full flex justify-end mt-[8px]">
              <div className="w-[95%] border-[1px] border-[#E1E6E4] rounded-[12px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F1F7F5_100%)] py-3 px-3">
                <div className="w-full flex items-center justify-between">
                  <span className="text-[#A41210] text-[12px] font-normal">
                    {card.grade}
                  </span>
                  <button
                    className={`text-[12px] font-medium border-[1px] rounded-[4px] py-0.5 px-2`}
                    style={{
                      color: card.status.color,
                      borderColor: card.status.color,
                    }}
                  >
                    {card.status.text}
                  </button>
                </div>
                <h1 className="text-[#171C1B] text-[16px] font-medium">
                  {card.subject}
                </h1>

                <div className="flex justify-end mt-[8px]">
                  
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Profile/profile-card-person.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <h3 className="text-[#485952] text-[12px] font-normal">
                      Students{" "}
                      <span className="text-[#485952] text-[14px] font-medium">
                        {card.students}
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="w-full flex flex-wrap justify-between mt-[8px]">
                  {card.actions.map((action, i) => (
                    <button
                      key={i}
                      className={`text-[14px] font-medium border-[1px] rounded-[6px] py-1.5 px-3`}
                      style={{
                        color: action.color,
                        background: action.bg,
                        borderColor: action.color,
                      }}
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}

    {(role === 'parent' ) && (
      <>
      <div className="w-full py-[16px] px-5 parent">
        <h2 className="text-[16px] text-[#000000] font-medium">Childs</h2>
        {students.map((student,index) => (
          <div
          key={index}
            className="border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[12px] py-[8px] px-[8px] mt-[8px] card"
          >
            <div className="flex gap-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] text-[#768B82] text-[16px] font-bold bg-[#E1E6E4] uppercase">
                {student.initials}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h2 className="text-[#000000] text-[16px] font-medium capitalize">
                    {student.fullName}
                  </h2>
                </div>
                <span className="text-[#768B82] text-[12px] font-normal">
                  {student.grade}
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between mt-[8px]">
              <button className="border-[1px] border-[#C2CDC8] text-[#3C4945] text-[14px] font-medium py-2 rounded-[6px] w-[45%]"  onClick={() => handleViewStudent(student)}>
                View
              </button>
              <button className="border-[1px] border-[#C2CDC8] text-[#3C4945] text-[14px] font-medium py-2 rounded-[6px] w-[45%]" onClick={()=>handleCertificate(student.fullName)}>
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-10">
         
         <div className="w-[80%] h-[40px] bg-[#F6F7F7] border-[1px] border-dotted rounded-[8px] border-[#C2CDC8] flex justify-center items-center">
           <h3 className="flex items-center gap-1 text-[#171C1B] text-[16px] font-medium" onClick={()=>handleAddChild()}>
             <FaPlus />
            Add Child
           </h3>
         </div>
       </div>
      
      </>
     
    )}
  
       </div>
   {/* Popup */}
   {popupVisible && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-end z-50">
  <div className="bg-white rounded-t-[24px] p-6 w-[100%] " onClick={closePopup}>
    <div className="flex gap-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] text-[#768B82] text-[16px] font-bold bg-[#E1E6E4] uppercase">
                {selectedStudent.initials}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h2 className="text-[#000000] text-[16px] font-medium capitalize">
                    {selectedStudent.fullName}
                  </h2>
                </div>
                <span className="text-[#768B82] text-[12px] font-normal">
                  {selectedStudent.grade}
                </span>
              </div>
     </div>
     <div className="w-full py-[16px]  Teacher">
        {/* <p className="text-[#3C4945] text-[12px] font-normal">
          Today - Thu, 07 November
        </p> */}
        {
          studentperiod?.map((item,i)=>(
            <div className="w-full mt-[8px] card" key={i}>
            <div className="flex items-center gap-3">
              <FaRegClock className="text-[#485952] text-[14px]" />
              <span className="text-[#485952] text-[14px] font-medium">
              {item.start_time}-{item.end_time}
              </span>
            </div>

            <div className="w-full flex justify-end mt-[8px]">
              <div className="w-[95%] border-[1px] border-[#E1E6E4] rounded-[12px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F1F7F5_100%)] py-3 px-3">
                <div className="w-full flex items-center justify-between">
                <h1 className="text-[#171C1B] text-[16px] font-medium">
                {item.subject}
                </h1>
                  <button
                    className={`text-[12px] font-medium border-[1px] rounded-[4px] py-0.5 px-2`}
                  
                  >
                   Completed
                  </button>
                </div>
                


              
              </div>
            </div>
          </div>
          ))
        }
         
      </div>
    <button
      onClick={closePopup}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Close
    </button>
  </div>
</div>
    )}

    {/* Add Child */}
    {popupVisiblechild && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
      <h2 className="text-lg font-bold mb-4">Student Details</h2>
      <div className="w-full mt-[16px]">
        {addStudent.map((student,i) => (
          <div
            key={i}
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
              checked={Array.isArray(selectedStudents) && selectedStudents.includes(student._id)}
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
        onClick={closePops}
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

export default Profile;
