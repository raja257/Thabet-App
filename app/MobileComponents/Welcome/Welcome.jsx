"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Main from "../Main/Main";
import { useRouter } from "next/navigation";

import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css";
const Welcome = () => {
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const data = localStorage.getItem("userData");
 if (data) {
      setUserData(JSON.parse(data)); 
    }
  }, []);
  const handleCardClick = (userType) => {
    const token = localStorage.getItem("token");
    if (token) {
      if (userData && userType === userData.role) {
        router.push("/formtabs");
      } else {
     
        toast.error("This role is not registered", {
          position: "top-center",
        });
      }
    } else {
      router.push("/signup");
    }
  };

  return (
    <>
      <ToastContainer />

      <Main />

      <div className="container px-5 mt-3">
        <div
          className="w-full h-[72px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[12px] flex items-center justify-between px-3 mb-[8px]"
          onClick={() => handleCardClick("parent")}
        >
          <div className="flex items-center gap-5">
            <Image
              src="/welcome-page/welcome-screen-home.svg"
              alt=""
              width={40}
              height={40}
              className=""
            />
            <h2 className="text-[16px] text-[#171C1B] font-medium">
              i’m a parent
            </h2>
          </div>
          <IoIosArrowForward />
        </div>

        <div
          className="w-full h-[72px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[12px] flex items-center justify-between px-3 mb-[8px]"
          onClick={() => handleCardClick("teacher")}
        >
          <div className="flex items-center gap-5">
            <Image
              src="/welcome-page/welcome-screen-teacher.svg"
              alt=""
              width={40}
              height={40}
              className=""
            />
            <h2 className="text-[16px] text-[#171C1B] font-medium">
              i’m a teacher
            </h2>
          </div>
          <IoIosArrowForward />
        </div>

        <div
          className="w-full h-[72px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[12px] flex items-center justify-between px-3 mb-[8px]"
          onClick={() => handleCardClick("student")}
        >
          <div className="flex items-center gap-5">
            <Image
              src="/welcome-page/welcome-screen-student.svg"
              alt=""
              width={40}
              height={40}
              className=""
            />
            <h2 className="text-[16px] text-[#171C1B] font-medium">
              i’m a student
            </h2>
          </div>
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
};

export default Welcome;
