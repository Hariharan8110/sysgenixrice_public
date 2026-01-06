import React from "react";
import SubServicesPmp from "./Component/SubServices";
import AboutPmp from "./Component/AboutServices";
import WhyWebPmp from "./Component/WhyWeb";
import FormAiData from "../../Component/Form";
import BusinessPmp from "./Component/BusinessBenefit";
import IndustriesPmp from "./Component/Industries";




const page = () => {
  return (
    <div>
      <SubServicesPmp/>
      <AboutPmp/>
      <BusinessPmp/>
      <WhyWebPmp/>
      <IndustriesPmp/>
      <FormAiData/>
    </div>
  );
};

export default page;
