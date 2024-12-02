"use client";
import React, { useEffect, useState } from "react";
import Main from "../Main/Main";
import ParentForm from "../ParentTabContent/ParentForm";
import StudentForm from "../StudentTabContent/StudentForm";
import TeacherForm from "../TeacherTabContent/TeacherForm";
import { useSearchParams } from "next/navigation"; 

const FormTabs = () => {
  const [activeTab, setActiveTab] = useState("teacher");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab");
    console.log(tab)
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <>
      <Main />
      <div className="w-full px-5">
        <div className="w-full h-[46px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[8px] flex justify-between items-center px-1">
          {["teacher", "parent", "student"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[16px] font-medium rounded-[6px] py-1.5 px-3 ${
                activeTab === tab ? "bg-[#C7110E] text-[#FFFFFF]" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4 p-4">
          {activeTab === "teacher" && (
            <div className="w-full">
              <TeacherForm />
            </div>
          )}
          {activeTab === "parent" && (
            <div className="w-full">
              <ParentForm />
            </div>
          )}
          {activeTab === "student" && (
            <div className="w-full">
              <StudentForm />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormTabs;
