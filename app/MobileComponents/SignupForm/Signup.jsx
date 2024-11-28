"use client";
import React, { useContext, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { signupData } from "@/app/Components/User";
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  role: "",
};
const Signup = () => {
  
  const [password, setPassword] = useState(false);
  const handlePassword = () => {
    setPassword(!password);
  };
  const router = useRouter();
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createUser(values);
        router.push("/welcome");
        resetForm();
      } catch (error) {
        console.error("Signup failed:", error.message);
      }
    },
  });
  const createUser = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      const res = await response.json();
      if (res.token && res.data) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("userData", JSON.stringify(res.data));
        // setUser(res.data); 
      }
      console.log(res,"ress")
      return res;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <>
      <div className="w-full px-5 mb-28">
        <div className="font-bold text-[#000000] text-[18px] mt-5">
          Create an account
        </div>
        <div className="w-full mt-4">
          <div className="w-full  flex justify-center items-center">
            <div className="w-full mx-auto">
              <form onSubmit={formik.handleSubmit}>
                <div className="w-full">
                  <label className="text-[#3C4945] text-[16px] font-normal pb-2">
                    First Name
                  </label>
                  <input
                    name="first_name"
                    type="text"
                    placeholder="First_Name"
                    className="xl:w-[80%] w-[100%] h-[48px] rounded-[8px] border-[1px] border-[#CAD0D9] 2xl:mt-[24px] text-[16px] font-medium text-[#000000] pl-3 outline-none placeholder:text-[12px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                  />
                  <label className="text-[#3C4945] text-[16px] font-normal pb-2">
                    Last Name
                  </label>
                  <input
                    name="last_name"
                    type="text"
                    placeholder="Last_Name"
                    className="xl:w-[80%] w-[100%] h-[48px] rounded-[8px] border-[1px] border-[#CAD0D9] 2xl:mt-[24px] text-[16px] font-medium text-[#000000] pl-3 outline-none placeholder:text-[12px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                  />
                  <label className="text-[#3C4945] text-[16px] font-normal pb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="xl:w-[80%] w-[100%] h-[48px] rounded-[8px] border-[1px] border-[#CAD0D9] 2xl:mt-[24px] text-[16px] font-medium text-[#000000] pl-3 outline-none placeholder:text-[12px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />

                  <div className="w-full mt-2">
                    <label className="text-[#3C4945] text-[16px] font-normal pb-2">
                      Password
                    </label>
                    <div className=" w-[100%] border-[1px] border-[#CAD0D9] h-[48px] relative rounded-[8px]">
                      <input
                        name="password"
                        type={password ? "text" : "password"}
                        placeholder="Password"
                        className="w-[90%] h-[46px] rounded-[8px] text-[16px] font-medium pl-3 outline-none placeholder:text-[12px]"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                      {password ? (
                        <FaRegEye
                          className="absolute top-4 right-3 cursor-pointer"
                          onClick={handlePassword}
                        />
                      ) : (
                        <FaRegEyeSlash
                          className="absolute top-4 right-3 cursor-pointer"
                          onClick={handlePassword}
                        />
                      )}
                    </div>
                  </div>
                  <label className="text-[#3C4945] text-[16px] font-normal pb-2">
                    Who are you ?
                  </label>
                  <input
                    name="role"
                    type="text"
                    placeholder="parent/teacher/student"
                    className="xl:w-[80%] w-[100%] h-[48px] rounded-[8px] border-[1px] border-[#CAD0D9] 2xl:mt-[24px] text-[16px] font-medium text-[#000000] pl-3 outline-none placeholder:text-[12px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.role}
                  />
                  <div className="w-full 2xl:mt-[24px] mt-[16px]">
                    <button
                      className="xl:w-[80%] w-[100%] h-[48px] bg-[#2C8D38] text-[#FFFFFF] text-[16px] font-medium rounded-[12px]"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
