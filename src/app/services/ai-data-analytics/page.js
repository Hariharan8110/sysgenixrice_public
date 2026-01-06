import React from "react";
import SubServicesAiData from "./Component/SubServices";
import AboutAiData from "./Component/AboutServices";
import WhyWebAiData from "./Component/WhyWeb";
import IndustriesAiData from "./Component/Industries";
import FormAiData from "../Component/Form";


const page = () => {
  return (
    <div>
      <SubServicesAiData/>
      <AboutAiData/>
      <WhyWebAiData/>
      <IndustriesAiData/>
      <FormAiData/>
    </div>
  );
};

export default page;
