"use client"
import React, { Suspense } from "react";
import FormTabs from "@/app/MobileComponents/FormTabs/FormTabs";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <FormTabs />
      </Suspense>
    </div>
  );
};

export default Page;
