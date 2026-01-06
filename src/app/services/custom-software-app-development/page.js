import React from "react";
import SubServicesCustomer from "./Component/SubServices";
import AboutCustomer from "./Component/AboutServices";
import WhyWebCustomer from "./Component/WhyWeb";
import IndustriesCustomer from "./Component/Industries";
import FormAiData from "../Component/Form";


const page = () => {
  return (
    <div>
      <SubServicesCustomer/>
      <AboutCustomer/>
      <WhyWebCustomer/>
      <IndustriesCustomer/>
      <FormAiData/>
    </div>
  );
};

export default page;
