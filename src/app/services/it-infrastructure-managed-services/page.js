import React from "react";
import SubServicesIT from "./Component/SubServices";
import AboutIT from "./Component/AboutServices";
import WhyWebIT from "./Component/WhyWeb";
import IndustriesIT from "./Component/Industries";
import FormAiData from "../Component/Form";



const page = () => {
  return (
    <div>
      <SubServicesIT/>
      <AboutIT/>
      <WhyWebIT/>
      <IndustriesIT/>
      <FormAiData/>
    </div>
  );
};

export default page;
