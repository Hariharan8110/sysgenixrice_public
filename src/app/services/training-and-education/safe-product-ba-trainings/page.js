import React from "react";
import SubServicesSafe from "./Component/SubServices";
import AboutSafe from "./Component/AboutServices";
import BusinessSafe from "./Component/BusinessBenefit";
import WhyWebSafe from "./Component/WhyWeb";
import IndustriesSafe from "./Component/Industries";
import FormAiData from "../../Component/Form";




const page = () => {
  return (
    <div>
      <SubServicesSafe/>
      <AboutSafe/>
      <BusinessSafe/>
      <WhyWebSafe/>
      <IndustriesSafe/>
      <FormAiData/>
    </div>
  );
};

export default page;
