import React from "react";
import SubServicesThird from "./Component/SubServices";
import AboutThird from "./Component/AboutServices";
import BusinessThird from "./Component/BusinessBenefit";
import WhyWebThird from "./Component/WhyWeb";
import IndustriesThird from "./Component/Industries";
import FormAiData from "../../Component/Form";



const page = () => {
  return (
    <div>
      <SubServicesThird/>
      <AboutThird/>
      <BusinessThird/>
      <WhyWebThird/>
      <IndustriesThird/>
      <FormAiData/>
    </div>
  );
};

export default page;
