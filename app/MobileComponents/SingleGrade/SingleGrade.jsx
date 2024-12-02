"use client"
import React, { useEffect, useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import SingleGradeTabContent from './SingleGradeTabContent';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
const SingleGrade = () => {
   
    const [students,setStudents]=useState([])
    console.log(students,"fetch students")
    const params = useParams();
    const gradeName = params.singlegrade?.[0]; 
    const _id=gradeName
    console.log(_id,"main iddd")
    const handlegetStudent = async () => {
    try {
    const response = await fetch("http://localhost:8000/class/get_student", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({_id}),
          });
  
          if (!response.ok) {
            throw new Error("Failed to save grade");
          }
  
          const result = await response.json();
          console.log("student gettttt  successfully:", result.data);
          setStudents(result.data)
        } catch (error) {
          console.log("Error saving grade:", error.message);
          alert("There was an error saving the grade. Please try again.");
        }
      } 
    useEffect(()=>{
      handlegetStudent()
    },[])
  return (
    <>
    <div className='w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-4'>
        <Link href="/grade">
        <h2 className='flex items-center gap-2 text-[#FFFFFF] text-[18px] font-bold cursor-pointer'><IoArrowBackSharp className="text-[20px] font-bold" /> {gradeName}</h2> 
        </Link>
     
      <p className='text-[#9CACA6] text-[14px] font-normal pt-[2px]'>Manage students, attendance, and certificates.</p>
    </div>
    
        <div className="mt-4 p-4">
        <SingleGradeTabContent students={students} _id={_id} handlegetStudent={handlegetStudent} />
         
        </div>
    </>
  )
}

export default SingleGrade

