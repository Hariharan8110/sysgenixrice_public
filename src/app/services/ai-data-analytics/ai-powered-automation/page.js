import React from "react";
import SubServicesAiPowered from "./Component/SubServices";
import IndustriesAiPowered from "./Component/Industries";
import AboutAiPowered from "./Component/AboutServices";
import BusinessBenefits from "./Component/BusinessBenefit";
import WhyWebAiPowered from "./Component/WhyWeb";
import FormAiData from "../../Component/Form";


const page = () => {
  return (
    <div>
      <SubServicesAiPowered/>
      <AboutAiPowered/>
      <BusinessBenefits/>
      <WhyWebAiPowered/>
      <IndustriesAiPowered/>
      <FormAiData/>
    </div>
  );
};

export default page;
