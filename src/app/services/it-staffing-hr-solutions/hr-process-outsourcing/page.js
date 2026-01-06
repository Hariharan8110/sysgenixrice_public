import React from "react";
import SubServicesHr from "./Component/SubServices";
import AboutHr from "./Component/AboutServices";
import BusinessHr from "./Component/BusinessBenefit";
import IndustriesHr from "./Component/Industries";
import FormAiData from "../../Component/Form";
import WhyWebHr from "./Component/WhyWeb";



const page = () => {
  return (
    <div>
      <SubServicesHr/>
      <AboutHr/>
      <BusinessHr/>
      <WhyWebHr/>
      <IndustriesHr/>
      <FormAiData/>
    </div>
  );
};

export default page;
