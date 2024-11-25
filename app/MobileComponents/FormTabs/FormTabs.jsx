"use client"
import React, { useState } from 'react';
import Main from '../Main/Main';
import ParentForm from '../ParentTabContent/ParentForm';
import StudentForm from '../StudentTabContent/StudentForm';
import TeacherForm from '../TeacherTabContent/TeacherForm';

const FormTabs = () => {
  const [activeTab, setActiveTab] = useState('Teacher'); 

  return (
    <>
      <Main />
      <div className="w-full px-5">
        <div className="w-full h-[46px] border-[1px] border-[#E1E6E4] bg-[#FFFFFF] rounded-[8px] flex justify-between items-center px-1">
          {['Teacher', 'Parent', 'Student'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[16px] font-medium rounded-[6px] py-1.5 px-3 ${
                activeTab === tab ? 'bg-[#C7110E] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#171C1B] '
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4 p-4">
          {activeTab === 'Teacher' && <div className='w-full'><TeacherForm /> </div>
          
          }
          {activeTab === 'Parent' && <div className='w-full'><ParentForm /> </div>}
          {activeTab === 'Student' && <div className='w-full'><StudentForm /> </div>}
        </div>
      </div>
    </>
  );
};

export default FormTabs;
