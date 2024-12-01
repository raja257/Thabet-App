"use client"
import Image from 'next/image'
import React,{useState} from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useFormik } from 'formik';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';
const initialValues={
  email:"",
  password:""
}
const TeacherForm = () => {
    const [password,setPassword] =useState(false)
   const router=useRouter()
  const handlePassword=()=>{
     setPassword(!password)
  }
  const formik=useFormik({
    initialValues:initialValues,
    onSubmit:(values,{resetForm})=>{
      handleAdd(values)
      resetForm()
    }
  })
  const handleAdd = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const result = await response.json();
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        const storedData = JSON.parse(localStorage.getItem("userData"));

        if (storedData.email === data.email) {
          localStorage.setItem("token", result.token); // Update token
          router.push("/profile"); // Redirect to profile page
        } else {
          toast.error("Invalid email or password");
        }
      } else {
        toast.error("No user found. Please sign up first.");
      }
    } catch (error) {
      toast.error(error.message || "There was an error. Please try again.");
    }
  };

  return (
    <>
    <ToastContainer />
    <div className='w-full'>
        <div className='flex gap-5'>
            <Image src="/welcome-page/welcome-screen-teacher.svg" alt="" width={30} height={30} className='' />
            <p className='text-[#5C7069] text-[12px] font-medium max-w-[130px]'>Access your teaching dashboard</p>
        </div>
        <div className="w-full mt-4">
     <div className="w-full  flex justify-center items-center">
       <div className="w-full mx-auto">
           <form onSubmit={formik.handleSubmit}>
        <div className="w-full">
         <label className='text-[#3C4945] text-[16px] font-normal pb-2'>Email Address</label>   
        <input name='email' type="email" placeholder="Email" className="xl:w-[80%] w-[100%] h-[48px] rounded-[8px] border-[1px] border-[#CAD0D9] 2xl:mt-[24px] text-[16px] font-medium text-[#000000] pl-3 outline-none"    
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
        <div className='w-full mt-2'>
         <label className='text-[#3C4945] text-[16px] font-normal pb-2'>Password</label>
        <div className=" w-[100%] border-[1px] border-[#CAD0D9] h-[48px] relative rounded-[8px]">
           
        <input name='password' type={password ? "text" : "password"} placeholder="Password" className="w-[90%] h-[46px] rounded-[8px] text-[16px] font-medium pl-3 outline-none" 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        />
        {
            password? <FaRegEye className="absolute top-4 right-3 cursor-pointer" onClick={handlePassword} /> : <FaRegEyeSlash className="absolute top-4 right-3 cursor-pointer" onClick={handlePassword} />
        }
        </div>

        </div>
        <div className="xl:w-[80%] w-[100%] 2xl:mt-[24px] mt-[16px] flex justify-between items-center">
          <div className="flex items-center gap-2"> 
          <input type="checkbox"  />
            <p className="text-[12px] text-[#5C7069] font-normal">Remember me</p>
          </div>
         
           <span className="font-medium text-[#2C8D38] text-[12px]">Create an account</span>  
      
         
        </div>
        <div className="w-full 2xl:mt-[24px] mt-[16px]">
         <button className="xl:w-[80%] w-[100%] h-[48px] bg-[#2C8D38] text-[#FFFFFF] text-[16px] font-medium rounded-[12px]" type='submit'>
         Sign in
         </button>
        </div>
     
      
       
        </div>

           </form>
       </div>
     </div>
   
    </div>

    </div>
    
    </>
  )
}

export default TeacherForm