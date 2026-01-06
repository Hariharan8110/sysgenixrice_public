import React from "react";
import SubServicesSalesF from "./Component/SubServices";
import AboutSalesF from "./Component/AboutServices";
import BusinessSalesF from "./Component/BusinessBenefit";
import WhyWebSalesF from "./Component/WhyWeb";
import IndustriesSalesF from "./Component/Industries";
import FormAiData from "../../Component/Form";



const page = () => {
  return (
    <div>
      <SubServicesSalesF/>
      <AboutSalesF/>
      <BusinessSalesF/>
      <WhyWebSalesF/>
      <IndustriesSalesF/>
      <FormAiData/>
    </div>
  );
};

export default page;
