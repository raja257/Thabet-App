"use client"
import React, { createContext, useState } from 'react';
 export const signupData=createContext()
const User = ({children}) => {
    const [user, setUser] = useState(null);
 
  return (
    <>
      <signupData.Provider value={{user,setUser}}>
        {children}
      </signupData.Provider>
    </>
  )
}
export default User
