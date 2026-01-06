import React from "react";
import SubServicesRemote from "./Component/SubServices";
import AboutRemote from "./Component/AboutServices";
import BusinessRemote from "./Component/BusinessBenefit";
import WhyWebRemote from "./Component/WhyWeb";
import IndustriesRemote from "./Component/Industries";
import FormAiData from "../../Component/Form";






const page = () => {
  return (
    <div>
      <SubServicesRemote/>
      <AboutRemote/>
      <BusinessRemote/>
      <WhyWebRemote/>
      <IndustriesRemote/>
      <FormAiData/>
    </div>
  );
};

export default page;
