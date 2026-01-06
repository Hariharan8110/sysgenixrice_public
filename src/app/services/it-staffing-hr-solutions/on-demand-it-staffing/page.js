import React from "react";
import SubServicesDemand from "./Component/SubServices";
import AboutDemand from "./Component/AboutServices";
import BusinessDemand from "./Component/BusinessBenefit";
import WhyWebDemand from "./Component/WhyWeb";
import IndustriesDemand from "./Component/Industries";
import FormAiData from "../../Component/Form";





const page = () => {
  return (
    <div>
      <SubServicesDemand/>
      <AboutDemand/>
      <BusinessDemand/>
      <WhyWebDemand/>
      <IndustriesDemand/>
      <FormAiData/>
    </div>
  );
};

export default page;
