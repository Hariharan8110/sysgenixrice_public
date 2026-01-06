import React from "react";
import SubServicesMobile from "./Component/SubServices";
import AboutMobile from "./Component/AboutServices";
import BusinessMobile from "./Component/BusinessBenefit";
import WhyWebMobile from "./Component/WhyWeb";
import IndustriesMobile from "./Component/Industries";
import FormAiData from "../../Component/Form";



const page = () => {
  return (
    <div>
      <SubServicesMobile/>
      <AboutMobile/>
      <BusinessMobile/>
      <WhyWebMobile/>
      <IndustriesMobile/>
      <FormAiData/>
    </div>
  );
};

export default page;
