"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { MdOutlineFileDownload } from "react-icons/md";
const page = () => {
  const [certi, setCerti] = useState('');
  // const params = useParams();
  const name = certi
  console.log(name);
  useEffect(() => {
    // Ensure window is defined (to avoid errors during SSR)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const recieverValue = params.get('certificate');
      
      setCerti(recieverValue);
     
    }
  }, []);

  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `/path/to/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <>
      <div className='w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-4'>
        <Link href="/profile">
          <h2 className='flex items-center gap-2 text-[#FFFFFF] text-[18px] font-bold cursor-pointer'>
            <IoArrowBackSharp className="text-[20px] font-bold" /> {name}
          </h2>
        </Link>
      </div>
      <div className='w-full px-5 my-5'>
        {['progress-report.pdf', 'another-report.pdf', 'final-report.pdf'].map((file, index) => (
          <div
            key={index}
            className='card w-full flex justify-between items-center border-[1px] border-[#E1E6E4] rounded-[12px] py-3 px-3 bg-[#E1E6E4] mb-[8px]'
          >
            <div className='w-[80%] bg-[#FFFF] px-2 py-2 my-2 rounded-[8px]'>
              {file}
            </div>
            <button
              className='bg-[#FFFF] p-2 rounded-full flex justify-center items-center cursor-pointer'
              onClick={() => handleDownload(file)}
              title="Download"
            >
              <MdOutlineFileDownload className='text-[#0B2810] text-[20px]' />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
