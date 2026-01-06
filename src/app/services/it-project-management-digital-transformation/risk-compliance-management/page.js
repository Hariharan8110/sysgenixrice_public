import React from "react";
import SubServicesRisk from "./Component/SubServices";
import AboutRisk from "./Component/AboutServices";
import BusinessRisk from "./Component/BusinessBenefit";
import WhyWebRisk from "./Component/WhyWeb";
import IndustriesRisk from "./Component/Industries";
import FormAiData from "../../Component/Form";




const page = () => {
  return (
    <div>
      <SubServicesRisk/>
      <AboutRisk/>
      <BusinessRisk/>
      <WhyWebRisk/>
      <IndustriesRisk/>
      <FormAiData/>
    </div>
  );
};

export default page;
