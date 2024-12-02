"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Main from "../Main/Main";
import { useRouter } from "next/navigation";
const Welcome = () => {
  const router = useRouter();
  const handleCardClick = (userType) => {
    console.log(`Navigating to /formtabs with tab: ${userType}`)
    router.push(`/formtabs?tab=${userType}`);
  };
  return (
    <>
      <Main />
      <div className="container px-5 mt-3">
        {["parent", "teacher", "student"].map((role) => (
          <div
            key={role}
            className="w-full h-[72px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[12px] flex items-center justify-between px-3 mb-[8px] cursor-pointer"
            onClick={() => handleCardClick(role)}
          >
            <div className="flex items-center gap-5">
              <Image
                src={`/welcome-page/welcome-screen-${role}.svg`}
                alt={`welcome ${role}`}
                width={40}
                height={40}
              />
              <h2 className="text-[16px] text-[#171C1B] font-medium">{`I’m a ${role}`}</h2>
            </div>
            <IoIosArrowForward />
          </div>
        ))}
      </div>
    </>
  );
};

export default Welcome;
