import React from "react";
import SubServicesEnd from "./Component/SubServices";
import AboutEnd from "./Component/AboutServices";
import BusinessEnd from "./Component/BusinessBenefit";
import WhyWebEnd from "./Component/WhyWeb";
import IndustriesEnd from "./Component/Industries";
import FormAiData from "../../Component/Form";




const page = () => {
  return (
    <div>
      <SubServicesEnd/>
      <AboutEnd/>
      <BusinessEnd/>
      <WhyWebEnd/>
      <IndustriesEnd/>
      <FormAiData/>
    </div>
  );
};

export default page;
