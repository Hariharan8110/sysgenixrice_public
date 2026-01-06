import React from "react";
import SubServicesAiTraining from "./Component/SubServices";
import AboutAiTraining from "./Component/AboutServices";
import BusinessAiTraining from "./Component/BusinessBenefit";
import WhyWebAiTraining from "./Component/WhyWeb";
import IndustriesAiTraining from "./Component/Industries";
import FormAiData from "../../Component/Form";




const page = () => {
  return (
    <div>
      <SubServicesAiTraining/>
      <AboutAiTraining/>
      <BusinessAiTraining/>
      <WhyWebAiTraining/>
      <IndustriesAiTraining/>
      <FormAiData/>
    </div>
  );
};

export default page;
