import React from "react";
import SubServicesCustom from "./Component/SubServices";
import AboutCustom from "./Component/AboutServices";
import BusinessCustom from "./Component/BusinessBenefit";
import WhyWebCustom from "./Component/WhyWeb";
import IndustriesCustom from "./Component/Industries";
import FormAiData from "../../Component/Form";



const page = () => {
  return (
    <div>
      <SubServicesCustom/>
      <AboutCustom/>
      <BusinessCustom/>
      <WhyWebCustom/>
      <IndustriesCustom/>
      <FormAiData/>
    </div>
  );
};

export default page;
