import React from "react";
import SubServicesECommerce from "./Component/SubServices";
import AboutECommerce from "./Component/AboutServices";
import BusinessECommerce from "./Component/BusinessBenefit";
import WhyWebECommerce from "./Component/WhyWeb";
import IndustriesECommerce from "./Component/Industries";
import FormAiData from "../../Component/Form";



const page = () => {
  return (
    <div>
      <SubServicesECommerce/>
      <AboutECommerce/>
      <BusinessECommerce/>
      <WhyWebECommerce/>
      <IndustriesECommerce/>
      <FormAiData/>
    </div>
  );
};

export default page;
