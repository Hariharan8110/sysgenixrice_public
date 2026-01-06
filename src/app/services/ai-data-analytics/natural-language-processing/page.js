import React from "react";
import SubServicesNatural from "./Component/SubServices";
import AboutNatural from "./Component/AboutServices";
import IndustriesNatural from "./Component/Industries";
import FormAiData from "../../Component/Form";
import BusinessBenefitsNatural from "./Component/BusinessBenefit";
import WhyWebNatural from "./Component/WhyWeb";


const page = () => {
  return (
    <div>
      <SubServicesNatural/>
      <AboutNatural/>
      <BusinessBenefitsNatural/>
      <WhyWebNatural/>
      <IndustriesNatural/>
      <FormAiData/>
    </div>
  );
};

export default page;
