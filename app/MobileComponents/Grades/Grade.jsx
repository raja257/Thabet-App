"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Grade = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [grades, setGrades] = useState([]); // Initially an empty array
  
  const [newSubject, setNewSubject] = useState("");
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");
  const [userData, setUserData] = useState(null);
  console.log(userData,"profile roles")
  const id=userData?._id
  console.log(id)
  const [newGrade, setNewGrade] = useState();
  useEffect(() => {
    const data =JSON.parse(localStorage.getItem("userData")) ;
 if (data) {
      setUserData(data); 
      setTimeout(()=>{
        fetchGrade(data._id);
        setNewGrade({ class_name: "", subjects: [] ,teacher_id:data._id});
      },[2000])
    } 
  }, []);

  const teacher_id = id;
  const fetchGrade = async (id) => {
    try {
      const response = await fetch("http://localhost:8000/class/get_class", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teacher_id:id }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch grades");
      }

      const result = await response.json();
      console.log("Grade fetched successfully:", result);

      // Set the fetched grades to state
      if (result.data) {
        setGrades(result.data);
      }
    } catch (error) {
      console.error("Error fetching grades:", error.message);
      alert("There was an error fetching the grades. Please try again.");
    }
  };

 

  const handleAddSubject = () => {
    if (newSubject && newStartTime && newEndTime) {
      const subjectObj = {
        name: newSubject,
        start_time: newStartTime,
        end_time: newEndTime,
      };
      setNewGrade({ ...newGrade, subjects: [...newGrade.subjects, subjectObj] });
      setNewSubject("");
      setNewStartTime("");
      setNewEndTime("");
    }
  };

  const handleAddGrade = async () => {
    if (newGrade.class_name && newGrade.subjects.length > 0) {
      try {
        const response = await fetch("http://localhost:8000/class/new_class", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGrade,{teacher_id}),
        });

        if (!response.ok) {
          throw new Error("Failed to save grade");
        }
        const result = await response.json();
        // setGrades([...grades, newGrade]);
        fetchGrade(teacher_id)
        setNewGrade({ class_name: "", subjects: [] });
        setShowPopup(false);

        console.log("Grade saved successfully:", result);
      } catch (error) {
        console.error("Error saving grade:", error.message);
        alert("There was an error saving the grade. Please try again.");
      }
    } else {
      alert("Please fill in all the required fields.");
    }
  };
  const router=useRouter()
  const handleCardClick = (id,name) => {
    // router.push(`/grade/${id}`);
    router.push(`/grade/singlegrade?grade=${id}&gradename=${name}`);
  };
  return (
    <>
      <div className="w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-4">
        <h2 className="text-[#FFFFFF] text-[18px] font-bold">Your Grade</h2>
        <p className="text-[#9CACA6] text-[14px] font-normal pt-[2px]">
          Manage students, attendance, and certificates.
        </p>
      </div>
      <div className="w-full mt-[16px] px-4">
        {grades.map((grade, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(grade._id ,grade.class_name)}
            className="card w-full bg-[#E1E6E4] rounded-[12px] py-5 px-4 mb-[8px]"
          >
            <h2 className="text-[20px] font-medium text-[#000000]">
              {grade.class_name}
            </h2>
            <div className="w-full flex flex-wrap gap-3 mt-[8px]">
              {grade.subjects?.map((subject, idx) => (
                <button
                  key={idx}
                  className="w-[30%] py-2 px-1 bg-[#FFFFFF] rounded-[8px] text-[#485952] text-[12px] font-medium"
                >
                  {subject.name}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="w-full mt-20 pb-3">
          <div
            className="w-full h-[40px] bg-[#F6F7F7] border-[1px] border-dotted rounded-[8px] border-[#C2CDC8] flex justify-center items-center cursor-pointer"
            onClick={() => setShowPopup(true)}
          >
            <h3 className="flex items-center gap-1 text-[#171C1B] text-[16px] font-medium">
              <FaPlus />
              New Grade
            </h3>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-[90%] max-w-[400px] p-5">
            <h2 className="text-[18px] font-bold mb-3">Add New Grade</h2>
            <div>
              <input
                type="text"
                placeholder="Grade Name (e.g., Grade 9)"
                className="w-full p-2 mb-3 border rounded"
                value={newGrade?.class_name}
                onChange={(e) =>
                  setNewGrade({ ...newGrade, class_name: e.target.value })
                }
              />
              <div className="flex flex-wrap gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Subject Name"
                  className="flex-1 p-2 border rounded"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                />
                <input
                  type="time"
                  className="p-2 border rounded"
                  value={newStartTime}
                  onChange={(e) => setNewStartTime(e.target.value)}
                />
                <input
                  type="time"
                  className="p-2 border rounded"
                  value={newEndTime}
                  onChange={(e) => setNewEndTime(e.target.value)}
                />
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={handleAddSubject}
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {newGrade?.subjects?.map((subject, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-sm px-2 py-1 rounded"
                  >
                    {subject.name} ({subject.start_time} - {subject.end_time})
                  </span>
                ))}
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 rounded"
                onClick={handleAddGrade}
              >
                Save Grade
              </button>
              <button
                className="w-full bg-gray-300 text-black py-2 mt-2 rounded"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Grade;
