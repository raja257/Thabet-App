import React, { Suspense } from "react";
import FormTabs from "@/app/MobileComponents/FormTabs/FormTabs";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FormTabs />
      </Suspense>
    </div>
  );
};

export default Page;
