import React from "react";
import SubServicesDm from "./Component/SubServices";
import AboutDm from "./Component/AboutServices";
import BusinessDm from "./Component/BusinessBenefit";
import WhyWebDm from "./Component/WhyWeb";
import IndustriesDm from "./Component/Industries";
import FormAiData from "../../Component/Form";






const page = () => {
  return (
    <div>
      <SubServicesDm/>
      <AboutDm/>
      <BusinessDm/>
      <WhyWebDm/>
      <IndustriesDm/>
      <FormAiData/>
    </div>
  );
};

export default page;
