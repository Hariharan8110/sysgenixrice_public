import React from "react";
import SubServicesUI from "./Component/SubServices";
import AboutUI from "./Component/AboutServices";
import BusinessUI from "./Component/BusinessBenefit";
import WhyWebUI from "./Component/WhyWeb";
import IndustriesUI from "./Component/Industries";
import FormAiData from "../../Component/Form";



const page = () => {
  return (
    <div>
      <SubServicesUI/>
      <AboutUI/>
      <BusinessUI/>
      <WhyWebUI/>
      <IndustriesUI/>
      <FormAiData/>
    </div>
  );
};

export default page;
