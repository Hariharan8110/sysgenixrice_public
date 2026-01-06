import React from "react";
import SubServicesTraining from "./Component/SubServices";
import AboutTraining from "./Component/AboutServices";
import WhyWebTraining from "./Component/WhyWeb";
import IndustriesTraining from "./Component/Industries";
import FormAiData from "../Component/Form";



const page = () => {
  return (
    <div>
      <SubServicesTraining/>
      <AboutTraining/>
      <WhyWebTraining/>
      <IndustriesTraining/>
      <FormAiData/>
    </div>
  );
};

export default page;
