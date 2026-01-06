import React from "react";
import SubServicesSupport from "./Component/SubServices";
import AboutSupport from "./Component/AboutServices";
import BusinessSupport from "./Component/BusinessBenefit";
import IndustriesSupport from "./Component/Industries";
import FormAiData from "../../Component/Form";
import WhyWebSupport from "./Component/WhyWeb";




const page = () => {
  return (
    <div>
      <SubServicesSupport/>
      <AboutSupport/>
      <BusinessSupport/>
      <WhyWebSupport/>
      <IndustriesSupport/>
      <FormAiData/>
    </div>
  );
};

export default page;
