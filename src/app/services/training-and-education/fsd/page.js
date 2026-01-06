import React from "react";
import AboutFsd from "./Component/AboutServices";
import BusinessFsd from "./Component/BusinessBenefit";
import IndustriesFsd from "./Component/Industries";
import SubServicesFsd from "./Component/SubServices";
import WhyWebFsd from "./Component/WhyWeb";
import FormAiData from "../../Component/Form";





const page = () => {
  return (
    <div>
      <SubServicesFsd/>
      <AboutFsd/>
      <BusinessFsd/>
      <WhyWebFsd/>
      <IndustriesFsd/>
      <FormAiData/>
    </div>
  );
};

export default page;
