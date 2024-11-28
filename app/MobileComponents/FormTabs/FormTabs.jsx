"use client"
import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import ParentForm from '../ParentTabContent/ParentForm';
import StudentForm from '../StudentTabContent/StudentForm';
import TeacherForm from '../TeacherTabContent/TeacherForm';

const FormTabs = () => {
  const [activeTab, setActiveTab] = useState('teacher'); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data)); 
    }
  }, []);

  const userRole = userData?.role || ''; // Default to an empty string if `userData` is null

  return (
    <>
      <Main />
      <div className="w-full px-5">
        <div className="w-full h-[46px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[8px] flex justify-between items-center px-1">
          {['teacher', 'parent', 'student'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[16px] font-medium rounded-[6px] py-1.5 px-3 ${
                activeTab === tab && userRole === tab ? 'bg-[#C7110E] text-[#FFFFFF]' : ''
              }`}
              disabled={!userRole.includes(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4 p-4">
          {activeTab === 'teacher' && <div className='w-full'><TeacherForm /> </div>}
          {activeTab === 'parent' && <div className='w-full'><ParentForm /> </div>}
          {activeTab === 'student' && <div className='w-full'><StudentForm /> </div>}
        </div>
      </div>
    </>
  );
};

export default FormTabs;
