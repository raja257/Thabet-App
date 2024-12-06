"use client"
import SingleGrade from '@/app/MobileComponents/SingleGrade/SingleGrade'
import React, { useEffect, useState } from 'react'
const page = () => {
  const [grade, setGrade] = useState('');
  const [gradename, setGradeName] = useState('');
  useEffect(() => {
    // Ensure window is defined (to avoid errors during SSR)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const recieverValue = params.get('grade');
      const recieverValu = params.get('gradename');
      setGrade(recieverValue);
      setGradeName(recieverValu); // Update state with the reciever value
    }
  }, []);
  return (
    <div>
        <SingleGrade grade={grade} gradename={gradename} />
    </div>
  )
}

export default page