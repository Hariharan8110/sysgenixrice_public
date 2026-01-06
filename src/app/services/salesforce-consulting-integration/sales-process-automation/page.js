import React from "react";
import SubServicesSales from "./Component/SubServices";
import AboutSales from "./Component/AboutServices";
import BusinessSales from "./Component/BusinessBenefit";
import WhyWebSales from "./Component/WhyWeb";
import IndustriesSales from "./Component/Industries";
import FormAiData from "../../Component/Form";



const page = () => {
  return (
    <div>
      <SubServicesSales/>
      <AboutSales/>
      <BusinessSales/>
      <WhyWebSales/>
      <IndustriesSales/>
      <FormAiData/>
    </div>
  );
};

export default page;
