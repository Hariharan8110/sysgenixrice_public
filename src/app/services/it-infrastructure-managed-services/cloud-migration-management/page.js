import React from "react";
import SubServicesCloud from "./Component/SubServices";
import AboutCloud from "./Component/AboutServices";
import BusinessCloud from "./Component/BusinessBenefit";
import WhyWebCloud from "./Component/WhyWeb";
import IndustriesCloud from "./Component/Industries";
import FormAiData from "../../Component/Form";




const page = () => {
  return (
    <div>
      <SubServicesCloud/>
      <AboutCloud/>
      <BusinessCloud/>
      <WhyWebCloud/>
      <IndustriesCloud/>
      <FormAiData/>
    </div>
  );
};

export default page;
