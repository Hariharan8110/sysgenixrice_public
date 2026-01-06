import React from "react";
import SubServicesNeed from "./Component/SubServices";
import AboutNeed from "./Component/AboutServices";
import BusinessNeed from "./Component/BusinessBenefit";
import WhyWebNeed from "./Component/WhyWeb";
import IndustriesNeed from "./Component/Industries";
import FormAiData from "../../Component/Form";




const page = () => {
  return (
    <div>
      <SubServicesNeed/>
      <AboutNeed/>
      <BusinessNeed/>
      <WhyWebNeed/>
      <IndustriesNeed/>
      <FormAiData/>
    </div>
  );
};

export default page;
