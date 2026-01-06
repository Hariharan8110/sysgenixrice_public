import React from "react";
import SubServicesBiData from "./Component/SubServices";
import AboutBiData from "./Component/AboutServices";
import IndustriesBiData from "./Component/Industries";
import BusinessBenefitsBi from "./Component/BusinessBenefit";
import WhyWebBiData from "./Component/WhyWeb";
import FormAiData from "../../Component/Form";


const page = () => {
  return (
    <div>
      <SubServicesBiData/>
      <AboutBiData/>
      <BusinessBenefitsBi/>
      <WhyWebBiData/>
      <IndustriesBiData/>
      <FormAiData/>
    </div>
  );
};

export default page;
