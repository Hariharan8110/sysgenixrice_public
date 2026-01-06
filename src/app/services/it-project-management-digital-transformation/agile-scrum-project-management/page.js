import React from "react";
import SubServicesAgile from "./Component/SubServices";
import AboutAgile from "./Component/AboutServices";
import BusinessAgile from "./Component/BusinessBenefit";
import WhyWebAgile from "./Component/WhyWeb";
import IndustriesAgile from "./Component/Industries";
import FormAiData from "../../Component/Form";




const page = () => {
  return (
    <div>
      <SubServicesAgile/>
      <AboutAgile/>
      <BusinessAgile/>
      <WhyWebAgile/>
      <IndustriesAgile/>
      <FormAiData/>
    </div>
  );
};

export default page;
