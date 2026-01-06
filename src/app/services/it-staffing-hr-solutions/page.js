import React from "react";
import SubServicesStaff from "./Component/SubServices";
import AboutStaff from "./Component/AboutServices";
import WhyWebStaff from "./Component/WhyWeb";
import IndustriesStaff from "./Component/Industries";
import FormAiData from "../Component/Form";


const page = () => {
  return (
    <div>
      <SubServicesStaff/>
      <AboutStaff/>
      <WhyWebStaff/>
      <IndustriesStaff/>
      <FormAiData/>
    </div>
  );
};

export default page;
